import Head from "next/head";
import PostCardList from "../components/postCardList/PostCardList";
import styles from "../styles/Home.module.scss";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>A Next.js blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.App}>
        <PostCardList postList={posts} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts: posts.posts,
    },
  };
}