import BackgroundImage from "./BackgroundImage";

function LandingTemplate({
  height,
  title,
  src,
  alt,
  className,
  imgPosition,
  desc,
}) {
  return (
    <>
      <div className={`w-full ${height}`}>
        <BackgroundImage
          src={src}
          alt={alt}
          className={className}
          position={imgPosition}
        />

        <div className="container w-full h-full flex items-end justify-start">
          <div className="max-w-lg text-white py-16">
            <h1>{title}</h1>
            {desc && <p className="max-w-[430px] mt-4 text-lg">{desc}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingTemplate;
