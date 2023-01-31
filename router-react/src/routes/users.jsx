import { GET } from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/userCard/UserCard";
import styles from "./styles/users.module.scss";

export default function Users() {  
  
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    GET("users?limit=12").then(({ users }) => setUserList(users));
  }, []);

  return (
    <>
      <div className={styles.Users}>
        {userList.map((user) => (
          <UserCard userData={user} key={user.id} />
        ))}
      <button onClick={() => navigate("/")}>To Homepage</button>

      </div>
    </>
  );
}