import { Link } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <h1>Users</h1>
      <Link to="/userslist">Users list</Link>
      <br />
      <Link to="/users/:details">User details</Link>
    </div>
  );
}

export default App;
