import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/userlist.module.scss";

export default function UsersList() {

  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUsersData(data.users));
  }, []);

  return (
    <>
      <div className={styles.List}>
        <h1>USERS LIST :</h1>

      {usersData.map((user) => (
        <div className={styles.content}>
          <p> Name: {user.firstName}</p>
          <p> Surname: {user.lastName}</p>
        </div>
      ))}
    
        <button onClick={() => navigate("/")}>Back to Homepage</button>

      </div>

    </>
  );
}