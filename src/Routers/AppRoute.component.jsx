import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from '../pages/homepage/homepage.component';
import CheckOutPage from '../pages/checkout-page/checkout.component'
import SignInAndSignUp from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CategoryPage from '../pages/category/category.component';
import Header from '../components/Header/header.component';
import Navbar from '../components/Navigation/navigation.component';
import ScrollToTop from '../components/Scroll-To-Top/ScrollToTop.component'
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.actions';
import { selectCurrentUser } from '../redux/user/user.selector';
import { fetchCollectionsStartAsync } from '../redux/shop/shop.actions';
import { selectIsCollectionsFetching } from '../redux/shop/shop.selector';
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

    componentDidMount(){
        const { setCurrentUser, fetchCollectionsStartAsync } = this.props;
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
        fetchCollectionsStartAsync();
        
    }

    componentWillUnmount(){
        this.unsubcribeFromAuth();
    }


    render(){
        const { isCollectionsFetching } = this.props;
         return (
            <BrowserRouter>
                <ScrollToTop>
                    <Header/>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' render={(props)=>( <HomePageWithSpinner isLoading={isCollectionsFetching} {...props} />)}/>
                        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
                        <Route exact path='/checkout' component={CheckOutPage} />
                        <Route path='/:collection' render={(props)=>( <CategoryPageWithSpinner isLoading={isCollectionsFetching}  {...props}/>)} />
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isCollectionsFetching: selectIsCollectionsFetching
    
})

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user)),
        fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);