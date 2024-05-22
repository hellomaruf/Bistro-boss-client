import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);
  if (user) {
    return children;
  }
  if (loading) {
    return <p>Loading..........</p>;
  }

  return <Navigate to="/login" state={location.pathname} replace="true" />;
}

export default PrivateRoute;
