import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
 const email_service_id = 'service_uf1y6pi'
 const email_tamplate_id = 'template_wdd0496'
 const email_user_id = '0RDdcCnc-0h9GK8wt'

  // Handle input changes for both text inputs and the textarea
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email
      const response = await emailjs.send(
        email_service_id,
        email_tamplate_id,
        formData,
        email_user_id
      );

      // Show success notification
      toast.success("Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    } catch (err) {
      // Show error notification
      toast.error("Failed to send message.");
      console.log("FAILED...", err);
    }

    // Clear form data after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div id='contacts' className='py-10'>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="mt-8 px-5 text-center">
                <address className="not-italic">fidelniyomugabo67@gmail.com</address>
                <address className="py-1 not-italic">Fidele Niyomugabo</address>
                <span className="relative flex justify-center">
                  <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                  ></div>
                  <span className="relative z-10 bg-white px-6">+250 798 366 977</span>
                </span>

                <p className="max-w-xl text-md py-5">
                  At the same time, the fact that we are wholly owned and totally independent from
                  manufacturer and other group control gives you confidence that we will only recommend what
                  is right for you.
                </p>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:text-gray-700/75"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:text-gray-700/75"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:text-gray-700/75"
                    >
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.802a8.198 8.198 0 00-2.373 15.968c-.038-.412-.073-1.045.015-1.496.078-.402.502-2.563.502-2.563s-.128-.26-.128-.643c0-.602.35-1.052.785-1.052.37 0 .548.278.548.611 0 .373-.238.929-.361 1.446-.104.44.22.797.655.797.786 0 1.39-1.007 1.39-2.458 0-1.278-.918-2.168-2.225-2.168-1.517 0-2.407 1.138-2.407 2.373 0 .46.18.952.406 1.219.045.052.052.098.04.15l-.163.64c-.02.08-.065.098-.15.06-.562-.27-.915-1.114-.915-1.797 0-1.458 1.057-2.793 3.063-2.793 1.607 0 2.857 1.14 2.857 2.664 0 1.595-.985 2.877-2.347 2.877-.457 0-.888-.238-1.035-.51l-.28 1.06c-.106.413-.394.931-.589 1.248a8.2 8.2 0 009.155-8.077c0-4.526-3.673-8.198-8.198-8.198z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-gray-700 transition hover:text-gray-700/75"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.01-1.018-.014-1.848-2.782.603-3.37-1.34-3.37-1.34-.454-1.153-1.11-1.46-1.11-1.46-.908-.621.069-.608.069-.608 1.004.07 1.533 1.03 1.533 1.03.892 1.528 2.341 1.087 2.91.831.092-.646.35-1.086.637-1.336-2.22-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.985 1.03-2.684-.103-.253-.446-1.275.098-2.656 0 0 .84-.269 2.75 1.024A9.565 9.565 0 0112 6.844a9.565 9.565 0 012.505.337c1.91-1.293 2.75-1.024 2.75-1.024.544 1.381.201 2.403.099 2.656.642.699 1.03 1.593 1.03 2.684 0 3.842-2.337 4.687-4.566 4.935.36.31.68.922.68 1.857 0 1.34-.012 2.42-.012 2.75 0 .267.18.578.687.48A10.005 10.005 0 0022 12c0-5.523-4.477-10-10-10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
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
                    <label className="sr-only" htmlFor="email">Email</label>
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
                    <label className="sr-only" htmlFor="phone">Phone</label>
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
                  <label className="sr-only" htmlFor="message">Message</label>
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
