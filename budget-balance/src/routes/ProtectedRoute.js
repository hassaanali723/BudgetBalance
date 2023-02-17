import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const isAuthenticated = true;

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/auth/login" />;
  }
}

export default ProtectedRoute;
