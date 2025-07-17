import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Articles from "./pages/Articles.tsx";
import Article from "./pages/Article.tsx";
import Layout from "./pages/Layout.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const routes = [{
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:  [{
    path: "/",
    element: <Home />,
  },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/articles",
      element: <Articles />,
    },
    {
      path: "/article/:name",
      element: <Article />
    },
  ]
}];

const router = createBrowserRouter(routes);

function App() {

  return (
      <>
        <RouterProvider router={router} />
      </>
  )
}

export default App
