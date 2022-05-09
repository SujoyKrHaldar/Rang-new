import Head from "next/head";
import Layout from "../components/layout/Layout";
import LandingTemplate from "../components/designs/common/LandingTemplate";

function becomeVolunteer() {
  return (
    <>
      <Head>
        <title>Be a Volunteer</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <LandingTemplate
          height="h-[55vh]"
          title="Join us to Volunteer"
          src="/assets/Volunteer.webp"
          alt="Event page landing image"
          className="opacity-40"
          imgPosition="50% 40%"
        />
      </Layout>
    </>
  );
}

export default becomeVolunteer;
