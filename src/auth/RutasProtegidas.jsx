import { Navigate } from 'react-router-dom';

const RutasProtegidas = ({ isAuthenticated, children }) => {

  console.log("Valor recibido:", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RutasProtegidas;