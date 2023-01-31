import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.scss";

function App() {

  return (
    <>
      <div className={styles.App}>
          <Link to="/splinegame">Spline game</Link>
          <Link to="/users">Users list</Link>
          <Link to="/users/1">User</Link>
          <Link to="/posts">Posts list</Link>
          <Link to="/posts/1">Post</Link>
      </div>
      
      <Outlet />
    </>
  );
}

export default App;






