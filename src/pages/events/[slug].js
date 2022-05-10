import Head from "next/head";
import LandingTemplate from "../../components/designs/common/LandingTemplate";
import Body from "../../components/events/slug/Body";
import Layout from "../../components/layout/Layout";

function eachEvents() {
  return (
    <>
      <Head>
        <title>Event name</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <LandingTemplate
          height="h-[55vh]"
          title="Celebrating Christmas With Orphan Children"
          src="/assets/event temp.jpg"
          alt="Event page landing image"
          className="opacity-30"
          imgPosition="50% 77%"
        />
        <Body />
      </Layout>
    </>
  );
}

export default eachEvents;
