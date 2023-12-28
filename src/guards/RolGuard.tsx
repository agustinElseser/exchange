import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PRIVATE_ROUTES } from "../models/routes";
import { ROLES } from "../models/roles";

interface Props {
  rol: ROLES;
}

export default function RoleGuard({ rol }: Props) {
  const { user } = useAuth();
  return user?.rol === rol ? <Outlet /> : <Navigate replace to={PRIVATE_ROUTES.PRIVATE} />;
}
