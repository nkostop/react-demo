import React, {Component} from 'react'
import {connect} from "react-redux";
import _ from 'lodash';

class ShopContainer extends Component{
  render(){
    let shopName = this.props.match.params.shopName;
    let shop = _.find(this.props.shops,(shop) => {
      return shopName===shop.name
    });
    return(
      <div>
        <h1>
          SHOP
        </h1>
        <p>
          Name: {shop.name}
        </p>
      <hr />
        <p>
          City: {shop.city}
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shops: state.shops.shops
  }
};

export default connect(mapStateToProps)(ShopContainer);