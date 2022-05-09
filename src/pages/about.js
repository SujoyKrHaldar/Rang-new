import Head from "next/head";
import About from "../components/about/About";
import LandingTemplate from "../components/designs/common/LandingTemplate";
import Layout from "../components/layout/Layout";

function about() {
  return (
    <>
      <Head>
        <title>About - Rang welfare foundation</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <LandingTemplate
          height="h-[55vh]"
          title="About us"
          src="/assets/About-us.webp"
          alt="About us landing image"
          className="opacity-60"
          imgPosition="50% 77%"
        />
        <About />
      </Layout>
    </>
  );
}

export default about;
