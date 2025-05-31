import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router";

function Contact({ dark }) {
  const form = useRef();
  const [email_sent, setEmail_sent] = useState(false);
  const [Enquiry, setEnquiry] = useState("Send Enquiry");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t5elwuo", "template_vpu27nc", form.current, {
        publicKey: "D6RiOiKcZLw3hW6Cb",
      })
      .then(
        () => {
          console.log("SUCCESS! message sent ");
          setEnquiry("Enquiry Sent");
          setEmail_sent(true);

          setTimeout(() => {
            setEnquiry("Send Enquiry");
            setEmail_sent(false);
          }, 3000);
        },
        (e) => {
          console.log("FAILED... message not sent", e.status, " : ", e.text);
          setEnquiry("Enquiry Not Sent");
          // setEmail_sent(true);

          setTimeout(() => {
            setEnquiry("Retry");
            // setEmail_sent(false);
          }, 3000);
        }
      );
  };

  return (
    <section
      className={`phone:pt-5 tab:p-10 bg-gradient-to-br ${
        dark ? "from-blue-950 via-orange-900 to-black" : "bg-gray-300 "
      } `}
    >
      <div className="mx-auto tablet:max-w-screen-laptop phone:w-full px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h3 className="phone:text-xl tab:text-2xl tablet:text-3xl m-2 font-Patua text-transparent bg-clip-text bg-gradient-to-r from-black/80 via-purple-600 to-pink-900">
              Anurag welcome's you{" "}
            </h3>
            <p
              className={`max-w-xl phone:text-base tab:text-lg tablet:text-xl font-montserrat text-justify ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Thank you for taking the time to explore my portfolio. Whether you
              have a project in mind, a collaboration idea, or just want to say
              hello, I'd love to hear from you! Feel free to reach out to me
              through the contact form below, or connect with me on social
              media. Your thoughts, feedback, and inquiries are always welcome
              and highly appreciated. Let's create something amazing together!
            </p>

            <div
              className={`mt-8 text ${dark ? "text-red-500" : "text-red-800"}`}
            >
              <label
                htmlFor="call"
                className="phone:text-base tab:text-lg tablet:text-xl "
              >
                <code className="font-codePro">
                  Feel free to call me anytime.{" "}
                </code>
              </label>
              <Link
                id="call"
                to="tel:+91 7991845638"
                className={`phone:text-lg tab:text-xl tablet:text-2xl font-semibold hover:font-bold hover:text-3xl transition-all ${
                  dark ? "text-green-600" : "text-red-800"
                }`}
              >
                {" "}
                +91- 7991845638{" "}
              </Link>

              {/* <Linkddress className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address> */}
            </div>
          </div>
          <div className="  w-full flex justify-center">
            <div
              className={`rounded-lg ${
                dark ? "bg-orange-950" : "bg-gray-500"
              } p-8 shadow-lg tablet:col-span- tablet:p-12 tablet:w-2/3 phone:w-full`}
            >
              <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="from_name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="from_email"
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="from_phone"
                      required
                    />
                  </div>
                </div>

                <div className="">
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="ring-1 w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="5"
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div className={`mt-4 `}>
                  <button
                    type="submit"
                    className={`inline-block w-full rounded-lg  px-5 py-3 font-medium text-white sm:w-auto hover:ring-1 ${
                      dark
                        ? email_sent
                          ? "bg-green-500"
                          : "bg-gray-900 hover:bg-gray-950"
                        : "bg-gray-700 hover:bg-gray-900 ring-white"
                    } transition-all`}
                  >
                    {Enquiry}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
