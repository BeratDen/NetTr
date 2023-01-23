import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  // eğer oturum açmışsa children'ı return et

  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    //kullanıcı oturum açmış mı ?
    //eğer oturum açmamışsa yönlendirme işlemi yap
    return (
      <Navigate
        to="/auth/login"
        replace={true}
        state={{ return_url: location.pathname + location.search }}
      />
    );
  }

  return children;
}
