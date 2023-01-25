import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutHandle } from "../../utils";
import { url } from "../../utils";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    logoutHandle();
  };

  return (
    <div>
      Profile Page
      {!user && <Link to={"/auth/login"}>Giriş Yap</Link>}
      <br />
      {user && (
        <>
          <button onClick={logoutHandler}>Çıkış Yap</button>
          <button>
            <Link to={url("auth.dashboard")}>DashBoard</Link>{" "}
          </button>
        </>
      )}
    </div>
  );
}
