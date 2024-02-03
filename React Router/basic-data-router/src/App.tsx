import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from 'react-router-dom';

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <h1>welcome</h1>,
      },
      {
        path: 'hello',
        loader: () => ({ message: "Hello Data Router!" }),
        Component() {
          const data = useLoaderData() as { message: string };
          return <h1>{data.message}</h1>;
        },
      },
      // lazy loading router provider
      {
        path: 'dashboard',
        async lazy() {
          const { DashbboardLayout } = await import("./pages/Dashboard");
          return { Component: DashbboardLayout };
        },
        children: [
          {
            index: true,
            async lazy() {
              const { DashboardIndex } = await import("./pages/Dashboard");
              return { Component: DashboardIndex };
            }
          },
          {
            path: 'messages',
            async lazy() {
              const { dashboardMessagesLoader, DashboardMessages } = await import("./pages/Dashboard");
              return {
                loader: dashboardMessagesLoader,
                Component: DashboardMessages,
              }
            }
          }
        ]
      },
      {
        path:"*",
        element: <h1>No Match</h1>,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />;
}
