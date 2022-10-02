import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dondon Dot Dev</title>
        <meta
          name="description"
          content="Home of Dondon's less professional dev antics"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Dondon Dot Dev</h1>
      </main>
    </div>
  );
};

export default Home;
