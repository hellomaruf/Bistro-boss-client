import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../Components/Spinner";
import { Navigate, useLocation } from "react-router-dom";

function AdminRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (user && isAdmin) {
    return children;
  }
  if (loading || isAdminLoading) {
    return <Spinner />;
  }
  return <Navigate to="/" state={location.pathname} replace></Navigate>;
}

export default AdminRoute;
