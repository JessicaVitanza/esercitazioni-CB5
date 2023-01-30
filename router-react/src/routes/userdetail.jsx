import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/userdetails.module.scss";

export default function UserDetail() {

  let { details } = useParams();
  details = 1;
  const navigate = useNavigate();
  const [usersData, setusersData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${details}`)
      .then((res) => res.json())
      .then((data) => setusersData(data));
  }, [details]);

  const onClickPrevBtn = () => navigate(`/users/${--details}`);
  const onClickNextBtn = () => navigate(`/users/${++details}`);

  console.log(details)

  return (
    <div className={styles.Details} id={usersData.id}> 
      <h1>USER DETAILS :</h1>
      <div className={styles.content}>
        <h3>Name: {usersData?.firstName}</h3>
        <h3>Surname: {usersData?.lastName}</h3>
        <img src={usersData?.image} alt="user" />
        <p>Gender: {usersData?.gender}</p>
        <p>Age: {usersData?.age}</p>
        <p>Birthday: {usersData?.birthDate}</p>
      </div>

      <div className={styles.buttons}>
        <button onClick={onClickPrevBtn}>Prev</button>
        <button onClick={() => navigate("/")}>To Homepage</button>
        <button onClick={onClickNextBtn}>Next</button>
      </div> 
    </div>
  );
}