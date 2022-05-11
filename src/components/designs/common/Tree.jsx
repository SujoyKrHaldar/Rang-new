import Image from "next/image";

function Tree() {
  return (
    <div className="w-[40px]">
      <Image
        src="/assets/DecorativeImage.png"
        alt="Decorative image"
        objectFit="cover"
        objectPosition="center"
        layout="responsive"
        loading="lazy"
        width={1920}
        height={1920}
      />
    </div>
  );
}

export default Tree;
