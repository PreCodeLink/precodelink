import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
            I am <strong>Basheer Lawal</strong>, a full-stack developer and hardware enthusiast. I build modern, scalable web applications using <span className="text-blue-500">React</span>, <span className="text-blue-500">PHP</span>, and <span className="text-blue-500">MySQL</span>, and I create IoT and Arduino-based hardware projects.
          </p>

          <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
            My focus is on clean, responsive UI, efficient backend systems, and solving real-world problems with technology. I enjoy combining software and hardware to create unique, functional projects that make life easier.
          </p>
        </motion.div>

        {/* Right: Optional Image / Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="w-72 h-72 rounded-full flex items-center justify-center text-blue-500 text-6xl font-bold">
            <img className="rounded-full" src={profile} alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;