import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Get in <span className="text-blue-500">Touch</span>
        </motion.h2>

        <p className="mt-4 text-slate-400">
          I’m always open to discussing new projects, freelance work, or career opportunities.
        </p>

        {/* Contact Links */}
        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:bashirlawalfr@gmail.com"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Garakuwa0q"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/Garkuwa"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg transition"
          >
            LinkedIn
          </a>
             <a
            href="https://wa.me/9040980156"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg transition"
          >
            Whatsapp
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;