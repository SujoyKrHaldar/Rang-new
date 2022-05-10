import Head from "next/head";
import Layout from "../components/layout/Layout";
import LandingTemplate from "../components/designs/common/LandingTemplate";

function donation() {
  return (
    <>
      <Head>
        <title>Donate us - Rang welfare foundation</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <LandingTemplate
          height="h-[55vh]"
          title="Donate us"
          desc="for great causes"
          src="/assets/Donatation.webp"
          alt="Donate page landing image"
          className="opacity-60"
          imgPosition="50% 40%"
        />
      </Layout>
    </>
  );
}

export default donation;
