import { PiPhoneCallDuotone } from "react-icons/pi";
import { TbMailFilled } from "react-icons/tb";

export default function Contact() {
  return (
    <section id='Contact' className="flex justify-center py-20 bg-2">
      <div className="flex flex-col items-center gap-6 text-center">

        <h1 className="text-gray-300 text-3xl font-hero-font">
          <span className="text-4xl border-b-4 border-gray-300">Contact</span>
        </h1>

        <p className="text-gray-300 text-xl max-w-md">
          Feel free to reach out to me via email or phone.
        </p>

        <a id='link'
          href="mailto:karthickvengatam24@gmail.com"
          className="button-2 flex items-center gap-2 px-6 py-3 "
        >
          <TbMailFilled /> <span>karthickvengatam24@gmail.com</span>
        </a>

        <a id='link'
          href="tel:+918610777382"
          className="button-2 flex items-center gap-2 px-6 py-3"
        >
         <PiPhoneCallDuotone /> <span>+91 8610777382</span>
        </a>

      </div>
    </section>
  );
}
