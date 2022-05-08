import Image from "next/image";

function BackgroundImage({ src, alt, className }) {
  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      <Image
        src={src}
        className={className}
        alt={alt}
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        loading="lazy"
      />
    </div>
  );
}

export default BackgroundImage;
