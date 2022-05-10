import type { NextPage } from "next";
import Head from "next/head";
import { Footer, Divider, Navigation, Main } from "../src/components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hubert Kozlowski</title>
        <meta name="description" content="Frontend Dev Test" />
      </Head>
      <Navigation />
      <Divider />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
