import Head from "next/head";
import Landing from "../components/home/Landing";
import Services from "../components/home/Services";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rang welfare foundation - a non-profit organisation.</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <Services />
      <Footer />
    </>
  );
}
