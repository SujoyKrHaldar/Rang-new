import { BiMap, BiMailSend, BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

function ContactDetails() {
  return (
    <>
      <div className="py-6 px-7 bg-[#efefef] ">
        <p className="text-xl font-bold">Get in touch</p>
        <a
          href="/"
          className="flex items-center justify-start gap-2 text-[#5b5b5b] hover:text-black mt-3"
        >
          <div className="flex">
            <BiMap />
          </div>
          <p>Maslandapur Kolkata, West Bengal, India 743289</p>
        </a>
        <a
          href="/"
          className="flex items-center justify-start gap-2 text-[#5b5b5b] hover:text-black mt-3"
        >
          <div className="flex">
            <BiMailSend />
          </div>
          <p>contact@rangwelfarefoundation.com</p>
        </a>
        <a
          href="/"
          className="flex items-center justify-start gap-2 text-[#5b5b5b] hover:text-black mt-3"
        >
          <div className="flex">
            <BiPhoneCall />
          </div>
          <p>9874567091</p>
        </a>
        <a
          href="/"
          className="flex items-center justify-start gap-2 text-[#5b5b5b] hover:text-black mt-3"
        >
          <div className="flex">
            <BsWhatsapp />
          </div>
          <p>9679435530</p>
        </a>
      </div>
    </>
  );
}

export default ContactDetails;
