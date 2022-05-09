import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Navbar_Desktop from "./components/navbar/Navbar_Desktop";
import Navbar_Mobile from "./components/navbar/Navbar_Mobile";

const navLinks = [
  {
    link: "Home",
    url: "/",
  },
  {
    link: "About",
    url: "/about",
  },
  {
    link: "Events",
    url: "/events",
  },
  {
    link: "Contact",
    url: "/contact",
  },
  {
    link: "Donate",
    url: "/donate",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const openModel = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="absolute w-full top-2 z-[10] text-white border-b-[1px] border-[#ffffff1a]">
        <div className="container flex items-center justify-between gap-4 ">
          <Link href="/">
            <div className="w-[40px] cursor-pointer py-4">
              <Image
                src="/logo-white.png"
                alt="Rang welfare foundation logo"
                objectFit="cover"
                objectPosition="center"
                layout="responsive"
                loading="eager"
                width={1920}
                height={1920}
              />
            </div>
          </Link>

          <div className="flex items-center justify-between gap-8">
            <Navbar_Desktop navLinks={navLinks} />

            <div
              onClick={openModel}
              className="md:hidden flex text-3xl cursor-pointer"
            >
              <FiMenu />
            </div>
          </div>
        </div>
      </div>

      <Navbar_Mobile navLinks={navLinks} open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
