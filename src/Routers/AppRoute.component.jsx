import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/homepage.component';
import Header from '../components/Header/header.component';

const AppRoute = ()=>{
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
            </Switch>
        
        </BrowserRouter>
    )
}

export default AppRoute;