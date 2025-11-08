import "react-router-dom";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  PERFORMERS: "/performers",
  PERFORMER: "/performers/:performerId",
  WORKER: "/worker",
} as const;

export type PathParams = {
  [ROUTES.PERFORMER]: {
    performerId: string;
  };
};

declare module "react-router-dom" {
  interface Register {
    params: PathParams;
  }
}
