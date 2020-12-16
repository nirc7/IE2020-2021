import React from 'react'
import { View, Text } from 'react-native'
import FCItem from './FCItem';

export default function FCShopImtes(props) {

    let shopItems2Show = props.shopItems.map(item =>
        <FCItem key={item.id} item={item}
            sendId2Remove2Parent={props.sendId2Remove2Parent} />);
    return (
        <View>
            {shopItems2Show}
        </View>
    )
}
