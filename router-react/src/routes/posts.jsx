import { GET } from "../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/postCard/PostCard";
import styles from "./styles/posts.module.scss";

export default function Posts() {

  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    GET("posts?limit=10").then(({ posts }) => setPostList(posts));
  }, []);

  return (
    <>
      <div className={styles.Posts}>
        {postList.map((post) => (
          <PostCard postData={post} key={post.id} />
          
        ))}
         <button onClick={() => navigate("/")}>To Homepage</button>
      </div>
    </>
  );
}