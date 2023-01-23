import { useNavigate, useLocation } from "react-router-dom";
import { loginHandle } from "../../utils";
import { useSelector } from "react-redux";

export default function Login() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = (user) => {
    loginHandle(user);
    navigate(location?.state?.return_url || "/", {
      replace: true,
      state: {
        name: "Berat",
      },
    });
  };

  return (
    <div>
      Login Page
      <br />
      {!user && (
        <nav>
          <button onClick={() => loginHandler({ id: 1, username: "berat" })}>
            Berat olarak giriş yap
          </button>
          <button onClick={() => loginHandler({ id: 2, username: "sea" })}>
            sea olarak giriş yap
          </button>
        </nav>
      )}
      {user && <nav>Hoşgeldiniz... {user.username}</nav>}
    </div>
  );
}
