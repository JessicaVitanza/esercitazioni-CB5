import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(router);

  return <h1>Pagina dinamica User: {id}</h1>;
};

export default User;