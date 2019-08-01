import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/homepage.component';
import SignInAndSignUp from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from '../components/Header/header.component';

const AppRoute = ()=>{
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/signin' component={SignInAndSignUp} />
            </Switch>
        
        </BrowserRouter>
    )
}

export default AppRoute;