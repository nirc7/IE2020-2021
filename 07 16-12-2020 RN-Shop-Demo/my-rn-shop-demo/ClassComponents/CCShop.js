import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Item from '../Classes/Item';
import FCShopImtes from '../FunctionalComponents/FCShopImtes';

const Items = [
  new Item(1, "cap", 10),
  new Item(7, "shirt", 20),
  new Item(5, "pants", 30),
];

export default class CCShop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shopItems: Items,
      cartItems: []
    }
  }

  getId2RemoveFromChild = (id) => {
    let newItems = this.state.shopItems.filter(item => item.id !== id);
    let item2Remove2cart = this.state.shopItems.filter(item => item.id === id)[0];
    this.setState({
      shopItems: newItems,
      cartItems: [...this.state.cartItems, item2Remove2cart]
    });

  }

  render() {

    console.log(this.state.cartItems);
    return (
      <View>
        <Text> Shop </Text>
        <FCShopImtes shopItems={this.state.shopItems} sendId2Remove2Parent={this.getId2RemoveFromChild} />
      </View>
    )
  }
}
