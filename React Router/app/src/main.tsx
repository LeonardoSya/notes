import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root';
import ErrorPage from './error-page';
import Contact, {
  loader as contactLoader
} from './routes/contact';

import './index.css';
import EditContact from './routes/edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,   // 当路由匹配到根路径"/"时应渲染的组件
    errorElement: <ErrorPage />,
    loader: rootLoader,  //! 在路由组件渲染之前加载数据, rootLoader函数的返回值可以通过useLoaderData在Root组件中访问 
    action: rootAction,  // 处理与此路由相关的动作，如表单提交，rootAcion函数会在相应的动作触发时执行
    children: [
      {
        path: 'contacts/:contactId',    // : has special meaning, turning it into a "dynamic segment" 
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path:'contacts/:contactId/edit',
        element:<EditContact />,
        loader: contactLoader,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);