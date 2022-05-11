import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

function ServiceLinks({ quickLinks }) {
  return (
    <>
      <div className="">
        {quickLinks.map((link, index) => (
          <Link href={link.url} passHref key={index}>
            <div className="flex items-center justify-start gap-4 cursor-pointer my-1 py-1 max-w-max">
              <div className="flex items-center text-2xl  bg-[#e3e3e3] ">
                <IoMdArrowDropright />
              </div>
              <p className="font-bold">{link.link}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ServiceLinks;
