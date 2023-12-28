import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "../models/routes";

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PRIVATE_ROUTES.PRIVATE} />;

export default function AuthGuard({ privateValidation }: Props) {
  const { user } = useAuth();

  return user?.name ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PUBLIC_ROUTES.LOGIN} />
  );
}
