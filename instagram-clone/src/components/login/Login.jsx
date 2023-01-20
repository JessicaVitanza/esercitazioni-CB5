import { useState, useRef } from "react";
import users from "../../utils/usersAccess";
import "./login.css";

const Login = () => {
  const showPass = useRef(null);
  const [loginState, setLoginState] = useState({});

  const onFormSubmit = () => {
    if (users) {
      users.map((user) => {
        if (
          user.username === loginState.username &&
          user.password === loginState.password
        ) {
          localStorage.setItem(
            "username",
            JSON.stringify({ ...loginState, imgProfile: user.imgProfile })
          );
        }
      });
    }
  };

  const onShowPass = () => {
    if (showPass.current.type === "text") {
      showPass.current.setAttribute("type", "password");
    } else {
      showPass.current.setAttribute("type", "text");
    }
  };

  return (
    <div className="LogIn">
      <h3>Login</h3>
      <form className="wrapper" onSubmit={onFormSubmit}>
        <input
          type="text"
          value={loginState.username}
          onChange={(e) =>
            setLoginState((prev) => ({ ...prev, username: e.target.value }))
          }
          placeholder="Nome utente"
        />
        <input
          type="password"
          value={loginState.password}
          onChange={(e) =>
            setLoginState((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Password"
          ref={showPass}
        />
        <button className="show-pass" onClick={onShowPass}>
          👀
        </button>
        <input type="submit" value="Accedi" />
      </form>
    </div>
  );
};

export default Login;