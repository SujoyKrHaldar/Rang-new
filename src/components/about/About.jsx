import Tree from "../designs/common/Tree";

function About() {
  return (
    <>
      <div className="w-full h-auto py-16">
        <div className="container w-full h-full flex items-center justify-start">
          <div className=" py-4">
            <Tree />

            <h2>
              Our <span className="font-bold">Journey</span>
            </h2>

            <p className="mt-4 text-[1rem]">
              Our journey started in late 2018 with a few young, energetic, and
              like-minded people who believe in achieving the greater good
              through the 'Ordinary'. The idea, which was conceived during a
              random chitchat, with the insatiable enthusiasm of our group
              members finally moulded into the RANG Welfare Foundation. The
              foundation is a non-political, non-profit organisation based in a
              small town, namely, Maslandapur in the district of North 24
              Parganas, West Bengal, India. Although we commenced our activities
              in 2018, we managed to register the foundation with the Ministry
              of Corporate Affairs, Government of India, on 14 February 2020,
              just before the COVID-19 pandemic hit India.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
