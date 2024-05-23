import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const isAuthenticated = true;

const PrivateRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.element,
};
export default PrivateRoute;
