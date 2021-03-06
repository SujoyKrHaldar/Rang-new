import Head from "next/head";
import Layout from "../../components/layout/Layout";
import LandingTemplate from "../../components/designs/common/LandingTemplate";
import EventsList from "../../components/events/EventsList";

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
          desc="Read more about the latest and upcoming events hosted by RANG
              across the country."
          src="/assets/Events.webp"
          alt="Event page landing image"
          className="opacity-30"
          imgPosition="50% 77%"
        />

        <EventsList />
      </Layout>
    </>
  );
}

export default events;
