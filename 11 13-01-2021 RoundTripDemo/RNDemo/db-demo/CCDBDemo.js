import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import * as Location from 'expo-location';

export default class CCDBDemo extends Component {
    constructor(props) {
        super(props)

        this.apiUrl = 'http://proj.ruppin.ac.il/igroup96/prod/api/studentssql';

        this.state = {

        }
    }


    btnGetSFDB = () => {
        fetch(this.apiUrl,
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                })
            })
            .then(res => {
                //console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch btnFetchGetStudents= ", result);
                    result.map(st => console.log(st.Name));
                    console.log('result[0].FullName=', result[0].Name);
                },
                (error) => {
                    console.log("err post=", error);
                });

    }

    btnLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log({ errorMessage: 'Permission to access location was denied', });
        }
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        console.log(location.coords.latitude);
    };



    btnReverseGeo = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            console.log({ errorMessage: 'Permission to access location was denied', });
        }

        let location = await Location.getCurrentPositionAsync({});

        if (location) {
            let reverseGC = await Location.reverseGeocodeAsync(location.coords);
            console.log( reverseGC );
        } else {
            console.log('You must push the Location button first in order to get the location before you ' +
                ' can get the reverse geocode for the latitude and longitude!');
        }
    }

    render() {
        return (
            <View>
                <Text> DB DEMO </Text>
                <Button title="get Studnets from DB" onPress={this.btnGetSFDB} />
                <Text></Text>
                <Button title="get location" onPress={this.btnLocation} />
                <Text></Text>
                <Button title="get reverseGeo" onPress={this.btnReverseGeo} />
            </View>
        )
    }
}
