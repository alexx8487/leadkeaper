import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import {
  MembersRoute,
  MembersRouteParams,
  List,
  ById,
  Create,
  Edit,
} from "./routes";

const Stack = createNativeStackNavigator<MembersRouteParams>();

const MembersScreen: FC = () => {
  return (
    <Stack.Navigator initialRouteName={MembersRoute.List}>
      <Stack.Screen
        name={MembersRoute.List}
        component={List}
        options={{
          title: "Members",
          headerLargeTitle: true,
          headerStyle: {
            backgroundColor: "#F2F2F7",
          },
          headerShadowVisible: false,
          headerTransparent: false,
          headerRight: () => {
            const navigation =
              useNavigation<NativeStackNavigationProp<MembersRouteParams>>();

            const handlePress = (): void => {
              navigation.navigate(MembersRoute.Create);
            };

            return (
              <TouchableOpacity onPress={handlePress}>
                <Ionicons
                  name="ios-person-add-outline"
                  color="#007AFF"
                  size={30}
                />
              </TouchableOpacity>
            );
          },
        }}
      />

      <Stack.Screen
        name={MembersRoute.View}
        component={ById}
        options={{
          headerStyle: {
            backgroundColor: "#F2F2F7",
          },
          headerShadowVisible: false,
          title: "",
          // presentation: "modal"
        }}
      />

      <Stack.Screen
        name={MembersRoute.Edit}
        component={Edit}
        options={{
          headerStyle: {
            backgroundColor: "#F2F2F7",
          },
          headerShadowVisible: false,
          title: "",
          // presentation: "modal"
        }}
      />

      <Stack.Screen
        name={MembersRoute.Create}
        component={Create}
        options={{
          title: "New member",
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
};

export default MembersScreen;
