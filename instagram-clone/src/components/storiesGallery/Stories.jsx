import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Users from "../users/Users";
import './stories.css';


const StoriesGallery = () => {
    const [msgList, setMsgList] = useState([]);
  
    useEffect(() => {
      GET("posts").then(({ posts }) => setMsgList(posts));
    }, []);
  
    return (
      <div className="Stories">
        {msgList.map((msg) => (
          <Users data={msg} key={msg.id} />
        ))}
      </div>
    );
  };
  
export default StoriesGallery