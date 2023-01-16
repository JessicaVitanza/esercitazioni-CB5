import { GET } from "../../utils/http";
import { useState, useEffect } from "react";
import './users.css'; 

const Users = ({ data }) => {
    const [user, setUser] = useState({});
  
    useEffect(() => {
      GET(`users/${data.userId}`).then((user) => setUser(user));
    }, []);
  
    return (
      <div className="Users">
        <img src={user.image} alt={user.firstName} />
        <p>{user.firstName}</p>
      </div>
    );
  };
  
  export default Users;

