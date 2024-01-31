import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from 'react-router-dom';

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      const data = useLoaderData() as { message: string };
      return <h1>{data.message}</h1>;
    },
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<h1>Loading...</h1>} />;
}
