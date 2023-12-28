import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./models/routes";
import { ROLES } from "./models/roles";
import AuthGuard from "./guards/AuthGuard";
import RoleGuard from "./guards/RolGuard";
import { Layout } from "./components/styled/layout.styled";
import NavBar from "./components/NavBar";

const TradePage = lazy(() => import("./pages/Trade/TradePage"));
const SettingsContainer = lazy(() => import("./pages/Settings/Settings"));
const SettingsPage = lazy(() => import("./pages/Settings/sections/Settings"));
const DevicesPage = lazy(() => import("./pages/Settings/sections/Devices"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<>Cargando</>}>
        <BrowserRouter>
          {/* <Logout /> */}
          <NavBar />
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PRIVATE_ROUTES.DASHBOARD} />} />
            <Route path={PUBLIC_ROUTES.LOGIN} element={<>LOGIN</>} />
            <Route element={<AuthGuard privateValidation={true} />}>
              <Route path={`${PRIVATE_ROUTES.DASHBOARD}/*`} element={<TradePage />} />
              <Route path={`${PRIVATE_ROUTES.SETTINGS}/*`} element={<SettingsContainer />}>
                {/* <Route path={`/*`} element={<SettingsPage />} /> */}
                <Route path={`${PRIVATE_ROUTES.DEVICES}/*`} element={<DevicesPage />} />
              </Route>
            </Route>
            <Route element={<RoleGuard rol={ROLES.ADMIN} />}>
              <Route path={`${PRIVATE_ROUTES.DASHBOARD}/*`} element={<>ADMIN</>} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </Layout>
  );
}
