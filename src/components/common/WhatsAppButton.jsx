

const WhatsAppButton = ({ phoneNumber, message }) => {
  const encodedMessage = message ? encodeURIComponent(message) : "";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a className="" href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button className=" bg-green-500 text-white p-2 rounded w-full flex items-center gap-2">
        <img src="/whatsapp.svg" width={26} height={26} alt="WhatsApp"  />
        <span>Chat on WhatsApp</span>
      </button>
    </a>
  );
};

export default WhatsAppButton;
