import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../pages/homepage/homepage.component';
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
                    <Route path='/signin' component={SignInAndSignUp} />
                </Switch>
            
            </BrowserRouter>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}

export default connect(null, mapDispatchToProps)(AppRoute);