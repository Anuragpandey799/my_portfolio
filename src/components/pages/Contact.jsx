import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiPhone, FiMail, FiSend } from "react-icons/fi";

function Contact({ dark }) {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Enquiry");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t5elwuo", "template_vpu27nc", form.current, {
        publicKey: "D6RiOiKcZLw3hW6Cb",
      })
      .then(
        () => {
          setButtonText("Enquiry Sent ✅");
          // alert("Thank you! Your message has been sent successfully.");
          e.target.reset(); // Clear the form

          setTimeout(() => {
            setButtonText("Send Enquiry");
          }, 3000);
        },
        (error) => {
          console.error("FAILED:", error);
          setButtonText("Failed! Retry 🔁");

          setTimeout(() => setButtonText("Send Enquiry"), 3000);
        }
      );
  };

  return (
    <section
      className={`min-h-screen py-16 px-6 sm:px-12 ${
        dark
          ? "bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-300 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            Let’s Connect!
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Whether you have a project in mind, a collaboration opportunity, or
            just want to say hello, I'm excited to hear from you. Fill out the
            form and I'll get back to you shortly!
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-2 text-lg">
              <FiPhone className="text-pink-500" />
              <a
                href="tel:+917991845638"
                className="hover:underline font-semibold"
              >
                +91 79918 45638
              </a>
            </p>

            <p className="flex items-center gap-2 text-lg">
              <FiMail className="text-purple-500" />
              <a
                href="mailto:anurag@example.com"
                className="hover:underline font-semibold"
              >
                anurag@example.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div
          data-aos="fade-up"
          className={`rounded-2xl shadow-xl p-8 tablet:p-10 ${
            dark
              ? "bg-black/40 backdrop-blur-sm border border-white/10"
              : "bg-white/90 backdrop-blur-md border border-gray-200"
          }`}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className={`block mb-1 text-sm font-medium ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Name
              </label>
              <input
                id="name"
                name="from_name"
                type="text"
                required
                placeholder="Your Name"
                className={`w-full rounded-md p-3 border focus:ring-2 focus:outline-none ${
                  dark
                    ? "bg-gray-900 text-white border-gray-700 focus:ring-purple-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-pink-400"
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className={`block mb-1 text-sm font-medium ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Email
              </label>
              <input
                id="email"
                name="from_email"
                type="email"
                required
                placeholder="you@example.com"
                className={`w-full rounded-md p-3 border focus:ring-2 focus:outline-none ${
                  dark
                    ? "bg-gray-900 text-white border-gray-700 focus:ring-purple-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-purple-400"
                }`}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className={`block mb-1 text-sm font-medium ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Phone
              </label>
              <input
                id="phone"
                name="from_phone"
                type="tel"
                required
                placeholder="Phone Number"
                className={`w-full rounded-md p-3 border focus:ring-2 focus:outline-none ${
                  dark
                    ? "bg-gray-900 text-white border-gray-700 focus:ring-purple-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-pink-300"
                }`}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className={`block mb-1 text-sm font-medium ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Your message..."
                className={`w-full rounded-md p-3 border focus:ring-2 focus:outline-none ${
                  dark
                    ? "bg-gray-900 text-white border-gray-700 focus:ring-purple-500"
                    : "bg-white text-gray-900 border-gray-300 focus:ring-purple-300"
                }`}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg w-full text-lg font-semibold transition-all duration-300 ${
                dark
                  ? buttonText.includes("Sent")
                    ? "bg-green-600"
                    : "bg-purple-700 hover:bg-purple-800"
                  : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
            >
              <FiSend />
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
