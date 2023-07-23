import React, { FC } from "react";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { AppRouteParams, AppRoute } from "./routes";
import { MembersScreen } from "../screens";

interface MembersProps
  extends BottomTabScreenProps<AppRouteParams, AppRoute.Members> {}

const Members: FC<MembersProps> = () => {
  return <MembersScreen />;
};

export default Members;
