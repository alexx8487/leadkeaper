import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { AppRoute, AppRouteParams, Home, Members, ScanQR } from "./routes";

const Tab = createBottomTabNavigator<AppRouteParams>();

const AppRouter: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#231814",
        },
      }}
    >
      <Tab.Screen
        name={AppRoute.Home}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? "#00D900" : "#ffffff"}
            />
          ),
          tabBarLabelStyle: {
            color: "#ffffff",
          },
        }}
      />

      <Tab.Screen
        name={AppRoute.Members}
        component={Members}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="people"
              size={24}
              color={focused ? "#00D900" : "#ffffff"}
            />
          ),
          tabBarLabelStyle: {
            color: "#ffffff",
          },
        }}
      />

      <Tab.Screen
        name={AppRoute.ScanQR}
        component={ScanQR}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="qr-code"
              size={24}
              color={focused ? "#00D900" : "#ffffff"}
            />
          ),
          tabBarLabelStyle: {
            color: "#ffffff",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRouter;
