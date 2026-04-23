import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const Profile = lazy(() => import("@/pages/Profile"));
const CategoryDetail = lazy(() => import("@/pages/CategoryDetail"));

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense
        fallback={
          <div className="p-4 space-y-3">
            <Skeleton className="h-12 w-full rounded-full" />
            <Skeleton className="h-32 w-full rounded-xl" />
            <div className="grid grid-cols-3 gap-3">
              {["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"].map(
                (k) => (
                  <Skeleton key={k} className="h-20 rounded-xl" />
                ),
              )}
            </div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: Profile,
});

const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/category/$name",
  component: CategoryDetail,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  servicesRoute,
  profileRoute,
  categoryRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
