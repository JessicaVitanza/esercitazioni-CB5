import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const UserCard = ({ userData }) => {
  const navigate = useNavigate();

  const { id, firstName, lastName, email } = userData;

  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const onHandleClick = () => navigate(`/users/${id}`);

  return (
    <div
      onMouseUp={onHandleClick}
      className={styles.UserCard}
      style={{ background: randomColor() }}
    >
      {id ? (
        <>
          <h3>{`Name: ${firstName}`}</h3>
          <h3>{`Surname: ${lastName}`}</h3>
          <p>Email: {email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserCard;