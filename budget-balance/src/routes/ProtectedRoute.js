import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/auth/login" />;
  }
}

export default ProtectedRoute;
