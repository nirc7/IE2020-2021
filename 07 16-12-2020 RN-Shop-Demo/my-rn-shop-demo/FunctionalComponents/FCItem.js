import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function FCItem(props) {

  const btnBuyMe = () => {
    props.sendId2Remove2Parent(props.item.id);
  }

  return (
    <View style={{
      borderColor: 'green',
      borderWidth: 1,
      margin: 10,
      padding: 15,
      borderRadius: 5
    }}>
      <Text> id = {props.item.id}</Text>
      <Text> name = {props.item.name}</Text>
      <Text> price = {props.item.price}</Text>

      <TouchableOpacity onPress={btnBuyMe}>
        <View style={{
          alignItems: 'center',
          borderColor: 'green',
          borderWidth: 1,
          margin: 5,
          padding: 5,
          borderRadius: 5,
          backgroundColor: 'grey'
        }}>
          <Text style={{ color: 'lightgreen', }}>Buy Me!</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
