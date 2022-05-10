import BackgroundImage from "../designs/common/BackgroundImage";

function BeVolunteer() {
  return (
    <>
      <div className="w-full h-[55vh]">
        <BackgroundImage
          src="/assets/Volunteer.webp"
          alt="Event page landing image"
          className="opacity-40"
          position="50% 40%"
        />

        <div className="container w-full h-full flex items-end justify-start">
          <div className="max-w-lg text-white py-16">
            <p className="mt-4 text-xl">Do you want to help?</p>
            <h1>Join us to Volunteer</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeVolunteer;
