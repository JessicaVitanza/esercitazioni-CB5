import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend/Friend";
import "./friendslist.css";

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    // GET("users").then(({ users }) => setFriendsList(users));
    GET("users").then((data) => setFriendsList(data.users));
  }, []);

  return (
    <div className="FriendsList">
        <p>Suggerimenti per te :</p>
      {friendsList.map((friend) => (
          <div className="FriendsList__text" >
        <Friend data={friend} key={friend.id} />
        <span>segui</span>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;