import styles from "../../styles/Pages.module.scss";

export default function Posts({ users }) {
  return (
    <div className={styles.Pages}>
      <div className={styles.Pages__users}>
        {users && users.map((user) => 
        <div className={styles.Pages__user} key={user.id}>
        <span>Id: {user.id}</span>
        <span>Email: {user.email}</span>
        </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const resUsers = await fetch("https://dummyjson.com/users");
  const dataUsers = await resUsers.json();

  return {
    props: {
      users: dataUsers.users,
    },
  };
}