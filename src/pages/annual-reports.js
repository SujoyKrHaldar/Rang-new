import Head from "next/head";
import Layout from "../components/layout/Layout";
import Reports from "../components/others/Reports";

function annualReports() {
  return (
    <>
      <Head>
        <title>Annual reports</title>
        <meta name="description" content="" />
      </Head>
      <Layout>
        <Reports />
      </Layout>
    </>
  );
}

export default annualReports;
