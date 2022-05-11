import Link from "next/link";
import Tree from "../designs/common/Tree";
import EventCard from "../designs/cards/EventCard";

function Events({ data }) {
  return (
    <>
      <div className="w-full py-[5rem]">
        <div className="container w-full h-full flex items-start justify-between gap-4">
          <div className="flex-1 gap-4 grid grid-cols-2">
            {data.slice(0, 2).map((data, index) => (
              <EventCard key={index} {...data} />
            ))}
          </div>

          <div className="flex-1 max-w-[500px] ">
            <div className="max-w-lg m-auto p-4">
              <Tree />
              <p className="mt-4 text-xl">We believe what we achieve</p>
              <h2>
                Join our <span className="font-bold">Events</span>
              </h2>
              <p className="my-4 max-w-[400px]">
                We conduct various events throughout the year. Notable events
                are conducted by us to reach people in every possible way.
              </p>
              <Link href="/events">
                <a className="btn bg-gray text-black bg-[#e3e3e3] my-4">
                  Explore events
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
