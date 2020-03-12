import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInSignUp from "./pages/signInSignUp/signInSignUp";
import Checkout from "./pages/checkout/checkout";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selector"
import { createStructuredSelector } from "reselect";


class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    if( userAuth ){
      const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
         setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            }
          )
        })
      }
    else
    {
      setCurrentUser(userAuth)
    }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/home" component={Homepage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInSignUp />)}/>
        <Route path= "/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
