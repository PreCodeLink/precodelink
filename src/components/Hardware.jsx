import { motion } from "framer-motion";

const hardwareProjects = [
  {
    title: "RC Car",
    description:
      "Remote-controlled car built with Arduino for motion and speed control.",
    tech: ["Arduino", "Motors", "C++"],
  },
  {
    title: "Laundry Rain Detector",
    description:
      "Arduino-based system that detects rain and alerts users to protect their laundry.",
    tech: ["Arduino", "Sensors", "C++"],
  },
  {
    title: "RFID Card Lock",
    description:
      "Secure door lock system using RFID cards to grant access.",
    tech: ["Arduino", "RFID", "C++"],
  },
  {
    title: "Dustbin",
    description:
      "Automatic dustbin with sensor-based lid opening for hygiene.",
    tech: ["Arduino", "Ultrasonic Sensor", "C++"],
  },
  {
    title: "Control Bulb with Remote",
    description:
      "Remote-controlled bulb system using Arduino and IR remote.",
    tech: ["Arduino", "IR Remote", "C++"],
  },
  {
    title: "Object Detector for Blind People",
    description:
      "A sensor-based system that detects  obstacles to help visually impaired people navigate safely.",
    tech: ["Arduino", "Ultrasonic Sensor", "Buzzer", "C++"],
  },
];

const Hardware = () => {
  return (
    <section id="hardware" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          <span className="text-blue-500">Hardware</span> Projects
        </motion.h2>

        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Showcase of my Arduino and IoT projects demonstrating hands-on hardware skills.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hardwareProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="relative bg-slate-950 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition duration-300 text-left"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>

              {/* Description */}
              <p className="mt-2 text-slate-400 text-sm">{project.description}</p>

              {/* Tech Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hardware;