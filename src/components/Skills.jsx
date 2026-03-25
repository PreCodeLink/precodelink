import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiMysql, SiPython, SiArduino } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Arduino", icon: <SiArduino /> },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, scalable, and high-performance applications.
        </p>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center hover:border-blue-500 transition duration-300"
            >
              <div className="text-4xl text-blue-500 mb-3">
                {skill.icon}
              </div>
              <p className="text-slate-300 font-medium">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;