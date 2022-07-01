import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";

import Home from '@/pages/home'
import About from '@/pages/about'

function NoMatch() {
  return <h2>NoMatch</h2>
}

let routes: RouteObject[] = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/Home",
        element: <Home />,
        // children: [
        //   { index: true, element: <CoursesIndex /> },
        //   { path: "/courses/:id", element: <Course /> },
        // ],
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "*", element: <NoMatch /> },
    ],
  },
];

export default routes