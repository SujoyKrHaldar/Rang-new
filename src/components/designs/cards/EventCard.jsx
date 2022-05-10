import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function EventCard({ title, subtitle, date, image, link }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-[185px]">
          <Image
            src={image}
            alt="Event card"
            objectFit="cover"
            objectPosition="center"
            layout="fill"
            loading="eager"
            className={` duration-1000
                  ${
                    isLoading
                      ? "scale-105 blur-md opacity-0"
                      : " blur-0 scale-100 "
                  }`}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>

        <div className="bg-[#f4f4f4] py-4 px-5 ">
          <p className="text-lg font-bold leading-6 mb-2">{title}</p>
          <p>{subtitle}</p>
          <p className="mb-2">{date}</p>
          <Link href={link}>
            <a className="font-semibold text-black">Read more</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EventCard;
