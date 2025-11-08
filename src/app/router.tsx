import { createBrowserRouter, redirect } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes.tsx";
import { App } from "@/app/app.tsx";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.PERFORMERS),
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/index.tsx"),
      },
      {
        path: ROUTES.WORKER,
        lazy: () => import("@/features/worker/worker.page"),
      },
      {
        path: ROUTES.PERFORMERS,
        lazy: () =>
          import("@/features/client/performers-list/performers-list.page"),
      },
      {
        path: ROUTES.PERFORMER,
        lazy: () => import("@/features/client/performer/performer.page"),
      },
      {
        path: "*",
        loader: () => redirect(ROUTES.PERFORMERS),
      },
    ],
  },
]);
