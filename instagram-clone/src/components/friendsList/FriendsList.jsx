import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend/Friend";
import Filter from "../filter/Filter";
import "./friendslist.css";

const FriendsList = ({filterSearch }) => {
  const [filterState, setFilterState] = useState("");
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then(( data ) => setFriendsList(data.users));
  },[]);

  return (
    <div className="FriendsList">
      <div className="search__div">
      <p>Amici :</p>
      <Filter setFilterState={setFilterState} />
      </div>
      
      <div className="div__friends">
      {friendsList
        .filter((friend) => friend.firstName.includes(filterState))
        .map((friend) => (
          <Friend data={friend} key={friend.id} />
        ))}
</div>
    </div>
  );
};

export default FriendsList;