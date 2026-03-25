import { motion } from "framer-motion";

const projects = [
  {
    title: "Hospital Management System",
    description:
      "Full-stack web application to manage patient records, appointments, and staff administration.",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
  },
  {
    title: "Hotel Booking Management System",
    description:
      "Web app for managing hotel bookings, room availability, and customer reservations.",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
  },
  {
    title: "School Management System",
    description:
      "System to manage students, teachers, classes, and academic records efficiently.",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
  },
  {
    title: "Movie Ticket Online Booking",
    description:
      "Online platform for browsing movies, selecting seats, and booking tickets.",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
  },
  {
    title: "Mini Blogs",
    description:
      "Simple blogging platform allowing users to create, edit, and read blog posts.",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
  },
  {
    title: "Online School",
    description:
      "E-learning platform with courses, quizzes, and student progress tracking.",
    tech: ["React", "PHP", "MySQL", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          Projects I’ve developed 
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="relative bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition duration-300 text-left"
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

export default Projects;