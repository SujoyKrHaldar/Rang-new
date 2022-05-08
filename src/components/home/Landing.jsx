import Link from "next/link";
import Tree from "../designs/common/Tree";
import BackgroundImage from "../designs/common/BackgroundImage";

function Landing() {
  return (
    <>
      <div className="w-full h-screen">
        <BackgroundImage
          src="/assets/Landing-image.webp"
          alt="Home landing image"
          className="opacity-60"
        />

        <div className="container w-full h-full flex items-center justify-start">
          <div className="max-w-lg text-white py-4">
            <Tree />
            <p className="mt-4 text-xl">Support the cause that matters</p>
            <h1>Let's make the world Better place</h1>
            <Link href="/">
              <a className="btn bg-white text-black  mt-8">Get Involved</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
