import Image from "next/image";
import Link from "next/link";

import Footer_BottomSection from "./components/Footer_BottomSection";
import Footer_TopSection from "./components/Footer_TopSection";

function Footer() {
  return (
    <>
      <div className="bg-[#1a1a1a] text-[#929292] pb-6 pt-14">
        <div className="container">
          <Link href="/">
            <div className="w-[40px] mb-4 cursor-pointer">
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
          <Footer_TopSection />
          <Footer_BottomSection />
        </div>
      </div>
    </>
  );
}

export default Footer;
