import { useState, useEffect } from "react";
import Header from "../header/Header";
import Menu from "../menu/Menu"; 
import Login from "../login/Login";
import "./layouts.css";

const Layout = ({ children }) => {

  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(JSON.parse(localStorage.getItem("username")).username);
    }
  }, []);
  
  return user ? (
    <div className="MainLayout">
      < Header />
      {children}
      < Menu />
    </div>
  )  : ( < Login /> )
};

export default Layout;