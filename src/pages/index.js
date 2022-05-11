import Head from "next/head";
import Events from "../components/home/Events";
import Landing from "../components/home/Landing";
import Services from "../components/home/Services";
import Layout from "../components/layout/Layout";

const data = [
  {
    title: "Celebrating Christmas With Orphan Children",
    subtitle: "Rang welfare foundation",
    date: "20.02.22",
    image: "/assets/event temp.jpg",
    link: "/events/celebrating-christmas-with-orphan-children",
  },

  {
    title: "Celebrating Christmas With Orphan Children",
    subtitle: "Rang welfare foundation",
    date: "20.02.22",
    image: "/assets/Events.webp",
    link: "/events/celebrating-christmas-with-orphan-children",
  },

  {
    title: "Donate to Rang for new causes",
    subtitle: "Rang welfare foundation",
    date: "16.02.22",
    image: "/assets/Donatation.webp",
    link: "/events/donate-to-rang-for-new-causes",
  },

  {
    title: "Christmas With Orphan Children",
    subtitle: "Rang welfare foundation",
    date: "05.02.22",
    image: "/assets/Contact.webp",
    link: "/events/christmas-with-orphan-children",
  },
  {
    title: "Celebrating Christmas With Orphan Children",
    subtitle: "Rang welfare foundation",
    date: "20.02.22",
    image: "/assets/event temp.jpg",
    link: "/events/celebrating-christmas-with-orphan-children",
  },

  {
    title: "Celebrating Christmas With Orphan Children",
    subtitle: "Rang welfare foundation",
    date: "20.02.22",
    image: "/assets/Events.webp",
    link: "/events/celebrating-christmas-with-orphan-children",
  },

  {
    title: "Donate to Rang for new causes",
    subtitle: "Rang welfare foundation",
    date: "16.02.22",
    image: "/assets/Donatation.webp",
    link: "/events/donate-to-rang-for-new-causes",
  },

  {
    title: "Christmas With Orphan Children",
    subtitle: "Rang welfare foundation",
    date: "05.02.22",
    image: "/assets/Contact.webp",
    link: "/events/christmas-with-orphan-children",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Rang welfare foundation - A non-profit organisation.</title>
        <meta name="description" content="" />
      </Head>

      <Layout>
        <Landing />
        <Services />
        <Events data={data} />
      </Layout>
    </>
  );
}
