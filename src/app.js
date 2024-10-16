import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./componnent/Body";
import Header from "./componnent/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./componnent/Contact";
import Error from "./componnent/Error";
import { RestrauntMenu } from "./componnent/RestrauntMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./componnent/Cart";
const About = lazy(() => import("./componnent/About"));
import Footer from "./componnent/Footer";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app flex flex-col min-h-screen">
        <Header />
        
        {/* Main content area */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Always show footer */}
        <footer className="w-full bg-gray-800 text-white">
          <Footer />
        </footer>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>...loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restraunt/:resId", element: <RestrauntMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
