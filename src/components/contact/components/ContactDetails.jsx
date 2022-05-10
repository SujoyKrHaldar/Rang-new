import { BiMap, BiMailSend, BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

function ContactDetails() {
  return (
    <>
      <div className="pt-[1rem] pb-[1.6rem] px-6 bg-[#efefef] border-black border-l-2">
        <p className="text-xl mb-2 font-bold">Get in touch</p>

        <a className="flex items-center justify-start gap-2">
          <div className="flex">
            <BiMap />
          </div>
          <p>Maslandapur Kolkata, West Bengal, India 743289</p>
        </a>

        <a className="flex items-center justify-start gap-2">
          <div className="flex">
            <BiMailSend />
          </div>
          <p>contact@rangwelfarefoundation.com</p>
        </a>

        <a className="flex items-center justify-start gap-2">
          <div className="flex">
            <BiPhoneCall />
          </div>
          <p>9874567091</p>
        </a>

        <a className="flex items-center justify-start gap-2">
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
