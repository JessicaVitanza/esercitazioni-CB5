import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Gallery from "@/components/gallery";
import Snowfall from 'react-snowfall';
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [snowfall, setSnowfall] = useState(50);
  
  return (
    <div className={styles.Home}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Users list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Benvenuto/a!</h1>
      < Gallery />
      <Snowfall
        color="coral"
        snowflakeCount={snowfall}
        style={{
          width: '100vw',
          height: '100vh',
        }}/>

      <label htmlFor="snowfall">Snowfall</label>
        <input
          type="range"
          name="snowfall"
          id="snowfall"
          onInput={(e) => setSnowfall(e.target.value) * 2.5}
        />

    </div>
  );
}