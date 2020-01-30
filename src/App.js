import React from 'react';
import Homepage from "./pages/homepage/Homepage"
import {Route} from "react-router-dom";
import ShopPage from "./pages/shop/shop"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
