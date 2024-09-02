import React from "react";
import WhatsAppButton from "../common/WhatsAppButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const link = [
    {
      label: "Home",
      id: "#home",
    },
    {
      label: "About",
      id: "#about",
    },
    {
      label: "Projects",
      id: "#projects",
    },
    {
      label: "Services",
      id: "#services",
    },
    {
      label: "Contacts",
      id: "#contacts",
    },
  ];
  return (
    <>
      <footer class="w-full bg-black h-full flex flex-col space-y-10 justify-center rounded-lg bg-[url('/img/background-3.png')] bg-cover bg-center">
        <div className="mx-auto max-w-5xl py-5">
          <div className="flex justify-center">
            <div className="logo">
              <strong
                style={{ fontFamily: "cursive", fontStyle: "normal" }}
                className=" text-white flex justify-center items-center p-1"
              >
              
                NI FIDELE
              </strong>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            I'm always excited to connect with new people, whether you have a
            project in mind, want to collaborate, or just want to chat about
            tech. Feel free to reach out to me using the form below, or contact
            me directly via email or phone. I look forward to hearing from you!
          </p>
        </div>
        <nav class="flex justify-center pt flex-wrap gap-6 text-white font-medium">
          {link.map((item) => {
            return (
              <a class="hover:text-gray-300" href={item.id}>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div class="flex justify-center space-x-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
          </a>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <WhatsAppButton
            phoneNumber="+250798366977"
            message="Hello! KAPTAGAT Team"
          />
        </div>
        <p class="text-center text-gray-500 py-5 font-medium">
          &copy; {currentYear} Company Ltd. All rights reservered.
        </p>
      </footer>
    </>
  );
};

export default Footer;
