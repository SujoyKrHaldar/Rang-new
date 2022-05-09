import BackgroundImage from "./BackgroundImage";

function LandingTemplate({ height, title, src, alt, className, imgPosition }) {
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
          <div className="max-w-lg text-white py-4">
            <h1 className="py-14 ">{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingTemplate;
