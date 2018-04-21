import React, { Component } from 'react';
import {connect} from "react-redux";
import MainListComponent from "../components/mainListComponent";
import {receiveShops} from "../actions/shopActions";

class MainListContainer extends Component{
  componentWillMount(){
    this.props._receiveShops();
  }

  render(){
    return(
      <MainListComponent
        shops={this.props.shops}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shops: state.shops.shops
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    _receiveShops: (payload) => {
      dispatch(receiveShops(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainListContainer);