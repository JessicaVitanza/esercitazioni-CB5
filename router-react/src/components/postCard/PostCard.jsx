import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const PostCard = ({ postData }) => {
  const navigate = useNavigate();

  const { id, body, userId } = postData;

  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const onHandleClick = () => navigate(`/posts/${id}`);

  return (
    <div
      onMouseUp={onHandleClick}
      className={styles.PostCard}
      style={{ background: randomColor() }}
    >
      {id ? (
        <>
          <h3>User: {userId}</h3>
          <p>{`${body}`}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostCard;