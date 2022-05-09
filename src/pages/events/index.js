import Head from "next/head";
import Layout from "../../components/layout/Layout";
import LandingTemplate from "../../components/designs/common/LandingTemplate";

function events() {
  return (
    <>
      <Head>
        <title>Events - Rang welfare foundation</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <LandingTemplate
          height="h-[55vh]"
          title="Our Events"
          src="/assets/Events.webp"
          alt="Event page landing image"
          className="opacity-30"
          imgPosition="50% 77%"
        />
      </Layout>
    </>
  );
}

export default events;
