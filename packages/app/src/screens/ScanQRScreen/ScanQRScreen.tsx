import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  ScanQRRoute,
  ScanQRRouteParams,
  Scanner,
  Result,
  Create,
  Edit,
} from "./routes";

const Stack = createNativeStackNavigator<ScanQRRouteParams>();

const ScanQRScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={ScanQRRoute.Scanner}>
      <Stack.Screen
        name={ScanQRRoute.Scanner}
        component={Scanner}
        options={{
          headerShown: false,
          title: "Scan QR",
        }}
      />

      <Stack.Screen
        name={ScanQRRoute.Result}
        component={Result}
        options={{
          title: "Scan Result",
          presentation: "formSheet",
        }}
      />

      <Stack.Screen
        name={ScanQRRoute.Create}
        component={Create}
        options={{
          title: "Create new member",
          presentation: "formSheet",
        }}
      />

      <Stack.Screen
        name={ScanQRRoute.Edit}
        component={Edit}
        options={{ title: "Edit member", presentation: "formSheet" }}
      />
    </Stack.Navigator>
  );
};

export default ScanQRScreen;
