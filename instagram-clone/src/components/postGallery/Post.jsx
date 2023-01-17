import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Comments from "../comments/Comments";
import Users from "../users/Users";
import './post.css';

function PostGallery(){    
    
    const [post, setPost] = useState([]);
  
    useEffect(() => {
      GET("posts").then(({ posts }) => setPost(posts));
    }, []);


    return (
        <div className="Post">
              {post.map((msg) => (
        
          <div className="Post__card">
          <div className="Post__div">
              <Users data={msg} key={msg.id} />
              <img className="Post__icon" src="./icon/dots.png" alt="" />
          </div>
          <div className="Post__img">
              <img src="https://picsum.photos/400/400" alt="" />
          </div>
          <div className="Post__interaction">
              <div>
                <img  src="./icon/heart.png" alt="" />
                <img  src="./icon/message.png" alt="" />
                <img  src="./icon/send.png" alt="" />
              </div>
          <img className="Post__icon" src="./icon/save.png" alt="" />
          </div>
          <div className="Post__text">
              <p>Mi piace: 74</p>
              <div>
              <Users data={msg} key={msg.id} />
              < Comments data={msg} key={msg.id}/>
              </div>
              
          </div>
          </div>
        ))}      
          
        </div>
      );
}

export default PostGallery;