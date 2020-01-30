import React from 'react';
import Homepage from "./pages/homepage/Homepage"
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop"
import Header from "./components/header/header"
import SignInSignUp from "./pages/signInSignUp/signInSignUp"
import { auth } from "./firebase/firebase.utils"
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){

   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
      console.log(user);
    })
  
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/shop" component={ShopPage}/>
      <Route exact path="/signin" component={SignInSignUp}/>
      </Switch>
    </div>
  );
}
}

export default App;
