import EventCard from "../designs/cards/EventCard";
import Tree from "../designs/common/Tree";

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

function EventsList() {
  return (
    <>
      <div className="w-full h-auto py-16">
        <div className="container w-full h-full ">
          <Tree />
          <h2>
            Latest <span className="font-bold">Activities</span>
          </h2>

          <div className="py-8  gap-4 grid grid-cols-4">
            {data.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsList;
