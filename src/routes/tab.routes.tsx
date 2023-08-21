import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { HomeScreen } from "../screens/HomeScreen";
import { LibraryScreen } from "../screens/LibraryScreen";
import { SearchScreen } from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();


export function TabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingTop: 10,
          backgroundColor: "rgb(0,0,0)",
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          paddingBottom: 5,
          fontSize: 10,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Sua Biblioteca"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="my-library-music" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
