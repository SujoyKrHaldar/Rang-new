import Image from "next/image";
import Tree from "../designs/common/Tree";

function Services() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="container w-full h-full flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="max-w-lg  py-4">
              <Tree />
              <p className="mt-4 text-xl">We believe what we achieve</p>
              <h2>
                Warm and true{" "}
                <span className="font-bold">Support for Needy people</span>
              </h2>
              <p className="mt-4 text-[1rem]">
                We believe that Every penny counts. You can help us by donating
                any amount that you like to. Come forward and help the needy and
                add colours to their life and let them smile.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/assets/Service-image.webp"
              alt="Home landing image"
              layout="responsive"
              width={800}
              height={800}
              loading="eager"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
