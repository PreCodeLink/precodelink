import { motion } from "framer-motion";
import profile from "../assets/profile.png"; // put your image in src/assets

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-1/2 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -z-10"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Hi, I'm <span className="text-blue-500">Basheer Lawal</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-slate-300"
          >
            Full Stack Developer building scalable web applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-slate-400"
          >
            I specialize in React, PHP, and MySQL, creating modern,
            fast, and secure digital solutions.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg shadow-blue-500/20 transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-slate-700 hover:border-blue-500 px-6 py-3 rounded-lg text-slate-300 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-2xl"></div>
            <img
              src={profile}
              alt="Basheer Lawal"
              className="relative w-72 h-72 object-cover rounded-full border-4 border-slate-800 shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;