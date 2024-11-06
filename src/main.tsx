import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DashboardLayout from "./Layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/dashboard", // Corrected typo in path
    element: <DashboardLayout />,
    children: [
      {
        path: "", //
        element: <Dashboard />,
      },
    ],
  },
  //   {
  //     path: "/verifyOtp",
  //     element: <Otp />,
  //   },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
