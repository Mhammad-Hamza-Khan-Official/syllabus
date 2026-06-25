import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
// import RoleRoute from "./RoleRoute";
import OtpRoute from "./OtpRoute";
import { ROUTES } from "../constant/routes";
import LoginPage from "../pages/LoginPage";
import Registration from "../pages/Registration";
import DashBoard from "../pages/DashBoard";
import NotFound from "../pages/NotFound";
import Otp from "../pages/Otp";
import LandingPage from "../pages/LandingPage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        {/* index Route */}
        <Route index element={<LandingPage/>}/>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<Registration />} />
        </Route>

        {/* Protected Route */}
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.DASHBOARD} element={<DashBoard />} />
        </Route>

        {/* role Route */}
        {/* <Route element={<RoleRoute/>}>
        </Route> */}

        {/* Otp Route */}
        <Route element={<OtpRoute />}>
          <Route path={ROUTES.OTP} element={<Otp />} />
        </Route>

        {/* Not found - Universal router */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
