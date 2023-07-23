export enum AppRoute {
  Home = "Home",
  Members = "Members",
  ScanQR = "Scan QR",
}

export type AppRouteParams = {
  [AppRoute.Home]: undefined;
  [AppRoute.Members]: undefined;
  [AppRoute.ScanQR]: undefined;
};
