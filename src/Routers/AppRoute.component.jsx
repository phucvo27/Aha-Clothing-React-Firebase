import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../pages/homepage/homepage.component';
import CheckOutPage from '../pages/checkout-page/checkout.component'
import SignInAndSignUp from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CategoryPage from '../pages/category/category.component';
import Header from '../components/Header/header.component';
import Navbar from '../components/Navigation/navigation.component';
import ScrollToTop from '../components/Scroll-To-Top/ScrollToTop.component'
import { auth, createUserProfileDocument, firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.actions';
import { updateCollections } from '../redux/shop/shop.actions';
import WithSpinner from '../components/With-Spinner/With-Spinner.component';

const HomePageWithSpinner = WithSpinner(HomePage);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);


class AppRoute extends React.Component{
    constructor(){
        super();
        this.state = {
            user: null,
            isLoading: true
        }
    }
    unsubcribeFromAuth = null;
    unsubcribeFromSnapshot = null;

    componentDidMount(){
        const { setCurrentUser, updateCollection } = this.props;
        this.unsubcribeFromAuth = auth.onAuthStateChanged(async user => {
            
            if(user){
                const userRef = await createUserProfileDocument(user);

                userRef.onSnapshot(snapshot => {
                    //this.setState(()=>({user: { id: snapshot.id , ...snapshot.data()}}))
                    setCurrentUser({ id: snapshot.id , ...snapshot.data()})
                    //this.props.setCurrentUser({ id: snapshot.id , ...snapshot.data()})
                })
            }else{
                setCurrentUser(user)
            }
        })
        const collectionRef = firestore.collection('collections');

        // Get Snapshot
        this.unsubcribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollection(collectionsMap);
            this.setState(()=>({isLoading: false}))
        })
    }

    componentWillUnmount(){
        this.unsubcribeFromAuth();
        this.unsubcribeFromSnapshot();
    }


    render(){
        const { isLoading } = this.state;
         return (
            <BrowserRouter>
                <ScrollToTop>
                    <Header/>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' render={(props)=>( <HomePageWithSpinner isLoading={isLoading} {...props} />)}/>
                        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
                        <Route exact path='/checkout' component={CheckOutPage} />
                        <Route path='/:collection' render={(props)=>( <CategoryPageWithSpinner isLoading={isLoading}  {...props}/>)} />
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser : state.user.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user)),
        updateCollection: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);