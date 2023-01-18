import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend/Friend";
import Filter from "../filter/Filter";
import "./friendslist.css";

const FriendsList = ({filterSearch }) => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then(( data ) => setFriendsList(data.users));
  },[filterSearch]);

  return (
    <div className="FriendsList">
      <p>Amici :</p>
         
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