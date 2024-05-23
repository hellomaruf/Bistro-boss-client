import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);
  if (user) {
    return children;
  }
  if (loading) {
    return <Spinner/>
  }

  return <Navigate to="/login" state={location.pathname} replace="true" />;
}

export default PrivateRoute;
