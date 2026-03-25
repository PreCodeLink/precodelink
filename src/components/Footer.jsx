import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 px-6 mt-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <span className="text-white font-semibold text-lg">Basheer Lawal</span>
        </div>

        {/* Right: Email & WhatsApp */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="mailto:bashirlawalfr@gmail.com"
            className="text-slate-400 hover:text-blue-500 transition text-2xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/9040980156"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-green-500 transition text-2xl"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;