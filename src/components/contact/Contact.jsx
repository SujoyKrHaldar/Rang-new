import Tree from "../designs/common/Tree";
import ContactForm from "../designs/forms/ContactForm";
import ContactDetails from "./components/ContactDetails";

function Contact() {
  return (
    <>
      <div className="w-full h-auto py-16">
        <div className="container w-full h-full flex items-start justify-between gap-4">
          <div className="flex-1 max-w-lg">
            <Tree />
            <h2>
              Spread the love - <span className="font-bold">Get involved!</span>
            </h2>
            <p className="mt-4 text-xl mb-4">
              Join us to Save the World Of Humanitarian and Feel happy to
              Support.
            </p>

            <ContactDetails />
          </div>
          <div className="flex-1 p-10 bg-[#efefef] max-w-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
