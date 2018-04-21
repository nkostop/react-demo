import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router";
import { BrowserRouter } from 'react-router-dom';
import MainListContainer from"../containers/mainListContainer";
import ShopContainer from "../containers/shopContainer";

class MainRouter extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainListContainer} />
          <Route path="/shop/:shopName" component={ShopContainer} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default MainRouter;