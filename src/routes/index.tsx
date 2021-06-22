import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Analytics = lazy(() => import("../pages/analytics"));

/**
 * These are internal routes
 * They will be rendered using `containers/Layout`
 *
 * Links rendered in the SidebarContent go to `routes/sidebar.tsx`
 */
const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/analytics",
    component: Analytics,
  },
];

export default routes;
