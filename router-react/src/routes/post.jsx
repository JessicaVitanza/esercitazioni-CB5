import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { GET } from "../utils/api";
import PostCard from "../components/postCard/PostCard";
import styles from "./styles/post.module.scss";

export default function Post() {
  const params = useParams();

  const [postData, setPostData] = useState({});

  useEffect(() => {
    GET(`posts/${params.postId}`).then((data) => setPostData(data));
  }, []);

  return (
    <>
      <div className={styles.Post}>
        <PostCard postData={postData} />
        <Link to="/posts">Ritorna alla lista post</Link>
      </div>
      <Outlet />
    </>
  );
}