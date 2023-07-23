import { MemberId } from "@xxx-shuffle/domain";

export enum MembersRoute {
  List = "List",
  View = "View",
  Create = "Create",
  Edit = "Edit",
}

export type MembersRouteParams = {
  [MembersRoute.List]: undefined;
  [MembersRoute.View]: {
    id: MemberId;
  };
  [MembersRoute.Create]: undefined;
  [MembersRoute.Edit]: {
    id: MemberId;
  };
};
