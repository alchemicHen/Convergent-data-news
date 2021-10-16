import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="screen1" component={screen1} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function HomeScreen() {
    return(
        <View>
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            <Text>Home Screen!<Text/>
        </View>
    );
}

function screen1() {
    return(
        <View>
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            <Text>Screen 1<Text/>
        </View>
    );
}