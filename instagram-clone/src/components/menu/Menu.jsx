import { useState, useEffect } from "react";
import './menu.css';

function Menu(){

    const [username, setUsername] = useState();

    useEffect(() => {
      setUsername(JSON.parse(localStorage.getItem("username")));
    }, []);
  
    const onLogout = () => {
      localStorage.removeItem("username");
      window.location.reload();
    };

    return (
        <div className='Menu'>
            <img className='logo desk' src="./instagramlogo.png" alt="" />
            <img className='icon' src="./icon/home.png" alt="" />
            <img className='icon' src="./icon/add.png" alt="" />
            <img className='icon' src="./icon/video.png" alt="" />
            <img className='icon desk' src="./icon/send.png" alt="" />
            <img className='icon' src="./icon/bag.png" alt="" />
            <img className='icon desk' src="./icon/heart.png" alt="" />
            <img className='icon desk' src="./icon/search.png" alt="" />
            
            <div className="login__div">
            <p onClick={onLogout} className="username">
            { username ? (
                <img src={username.imgProfile} alt="user-img" />
            ) : ( "User" )
            }
            </p>
            </div>
            
        </div>
    );
}

export default Menu;