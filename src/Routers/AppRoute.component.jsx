import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../pages/homepage/homepage.component';
import CheckOutPage from '../pages/checkout-page/checkout.component'
import SignInAndSignUp from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from '../components/Header/header.component';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/user/user.actions';

class AppRoute extends React.Component{
    constructor(){
        super();
        this.state = {
            user: null
        }
    }
    unsubcribeFromAuth = null;

    componentDidMount(){
        const { setCurrentUser } = this.props;
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
    }

    componentWillUnmount(){
        this.unsubcribeFromAuth();
    }


    render(){
         return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUp />)} />
                    <Route exact path='/checkout' component={CheckOutPage} />
                </Switch>
            
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
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);