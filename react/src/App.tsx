import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';

import Root from './Root.tsx'
import TodoRegist from './pages/TodoRegist.tsx'
import TodoInfo from './pages/TodoInfo.tsx'
import TodoList from './pages/TodoList.tsx'
import { ErrorNotFound } from './ErrorNotFound.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        index: true,
        element: <TodoList />
      },
      {
        path: '/regist',
        element: <TodoRegist />
      },
      {
        path: '/:id',
        element: <TodoInfo />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);