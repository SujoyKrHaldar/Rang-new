import Head from "next/head";
import Layout from "../components/layout/Layout";
import LandingTemplate from "../components/designs/common/LandingTemplate";

function contact() {
  return (
    <>
      <Head>
        <title>Contact us - Rang welfare foundation</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <LandingTemplate
          height="h-[55vh]"
          title="Contact us"
          src="/assets/Contact.webp"
          alt="Contact page landing image"
          className="opacity-40"
          imgPosition="50% 40%"
        />
      </Layout>
    </>
  );
}

export default contact;
