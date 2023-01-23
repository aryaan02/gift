import { Navigate } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";

const Protected = ({children}) => {
  const { user } = useAuthValue();

  if (!user) {
    return (<Navigate to="/" />);
  }
  return children;
};

export default Protected;
