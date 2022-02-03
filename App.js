import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home", headerTitle: "Home",}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


