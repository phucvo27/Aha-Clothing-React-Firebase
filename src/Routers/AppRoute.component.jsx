import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/homepage.component';
import SignInAndSignUp from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from '../components/Header/header.component';
import { auth } from '../firebase/firebase.utils';
class AppRoute extends React.Component{
    constructor(){
        super();
        this.state = {
            user: null
        }
    }
    unsubcribeFromAuth = null;

    componentDidMount(){
        this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState(()=>({user}))
        })
    }

    componentWillUnmount(){
        this.unsubcribeFromAuth();
    }


    render(){
         return (
            <BrowserRouter>
                <Header user={this.state.user}/>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/signin' component={SignInAndSignUp} />
                </Switch>
            
            </BrowserRouter>
        )
    }
}

export default AppRoute;