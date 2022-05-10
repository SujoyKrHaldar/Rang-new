import Head from "next/head";
import Layout from "../components/layout/Layout";
import BeVolunteerLanding from "../components/others/BeVolunteerLanding";
import VolunteerLinks from "../components/others/VolunteerLinks";

function becomeVolunteer() {
  return (
    <>
      <Head>
        <title>Be a Volunteer</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <BeVolunteerLanding />
        <VolunteerLinks />
      </Layout>
    </>
  );
}

export default becomeVolunteer;
