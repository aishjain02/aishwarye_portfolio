import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ReleasedThreadsImg from '../Released Threads.jpg';
import AIAttendanceImg from '../AI Attendance Management System.png';
import AttirelyImg from '../Attirely.png';

const projects = [
  {
    title: 'AI-Attendance Management System',
    description: 'Developed a Python-based attendance system using face recognition for real-time tracking, automating it with Excel integration.',
    image: AIAttendanceImg,
    technologies: ['Python', 'AI Integration', 'Automation']
  },
  {
    title: 'Digital Product',
    description: 'Launched an E-Book on monetizing Threads, achieving 50+ sales using a data-driven marketing strategy.',
    image: ReleasedThreadsImg,
    technologies: ['Product Development', 'Funnel Optimization', 'Product Strategy'],
    live: 'https://shop.beacons.ai/released_threads/2772e30d-30ab-4df2-95e9-cb436d3c0e9d',
  },
  {
    title: 'Smart Wardrobe– AI Outfit Recommender',
    description: 'Built an AI-driven outfit recommendation system, considering weather, occasion, and user preferences.',
    image: AttirelyImg,
    technologies: ['Data Analysis', 'UX Testing', 'API Integration']
  },
];

const ProjectCard = ({ project, index }) => {
  const isAIAttendance = project.title === 'AI-Attendance Management System';
  const isDigitalProduct = project.title === 'Digital Product';
  const isSmartWardrobe = project.title === 'Smart Wardrobe– AI Outfit Recommender';
  const cardContent = (
    <>
      <div className="relative h-44 md:h-56 overflow-visible">
        <img
          src={project.image}
          alt={project.title}
          className={
            isAIAttendance
              ? "absolute -top-6 -left-6 w-[120%] h-[110%] object-cover object-left rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
              : "w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          }
          style={isAIAttendance ? { zIndex: 1 } : {}}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              onClick={e => e.stopPropagation()}
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              onClick={e => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </>
  );
  if (isAIAttendance || isDigitalProduct || isSmartWardrobe) {
    return (
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer block focus:outline-none focus:ring-2 focus:ring-primary-500 transform hover:scale-105"
        tabIndex={0}
        aria-label={`Open ${project.title} live link`}
      >
        {cardContent}
      </motion.a>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      {cardContent}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;