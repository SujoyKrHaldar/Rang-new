import Head from "next/head";
import Landing from "../components/home/Landing";
import Services from "../components/home/Services";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rang welfare foundation - A non-profit organisation.</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Landing />
        <Services />
      </Layout>
    </>
  );
}
