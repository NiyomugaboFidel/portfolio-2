import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const email_service_id = "service_uf1y6pi";
  const email_template_id = "template_wdd0496";
  const email_user_id = "0RDdcCnc-0h9GK8wt";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        email_service_id,
        email_template_id,
        formData,
        email_user_id
      );
      toast.success("Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    } catch (err) {
      toast.error("Failed to send message.");
      console.log("FAILED...", err);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div id="contacts" className="py-10">
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8 px-5 text-center">
                <div className="w-full h-full py-5">
                  <h3 className="text-[25px] leading-[35px] text-black font-bold text-start">
                    Get in Touch:
                  </h3>
                  <p className="max-w-xl text-md text-start">
                    I'm always excited to connect with new people, whether you
                    have a project in mind, want to collaborate, or just want to
                    chat about tech. Feel free to reach out to me using the form
                    below, or contact me directly via email or phone. I look
                    forward to hearing from you!
                  </p>
                </div>
                <div className="w-full h-full">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:fidelniyomugabo67@gmail.com">
                      fidelniyomugabo67@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+250798366977">+250798366977</a>
                  </p>
                  <p style={{ fontWeight: 'bold', color: '#1DA1F2' }}>#LetsConnect</p>
                </div>
                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                  {/* Add your social media links here */}
                </ul>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-900 border p-3 text-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-900 border p-3 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border-gray-900 border p-3 text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-900 border p-3 text-sm"
                    rows="8"
                    required
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
