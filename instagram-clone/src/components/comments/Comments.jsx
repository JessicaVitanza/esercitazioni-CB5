import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import './comments.css'; 

const Comments = ({ data }) => {
    const [comment, setComment] = useState({});
  
    useEffect(() => {
      GET(`comments/${data.id}`).then((comment) => setComment(comment));
    }, []);
  
    return (
      <div className="Comments">
        <h5>{comment.username}</h5>
        <span>{comment.body}</span>
      </div>
    );
  };
  
  export default Comments;