import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Pinewheel Labs',
    position: 'Growth Manager and Analyst',
    period: 'Jan 2025– Present',
    description: 'Developed data-driven growth strategies to enhance user engagement and business performance. Built Power BI dashboards for real-time user analytics, retention tracking, and revenue forecasting.',
    skills: ['Product Growth', 'Data Analytics', 'Retention Metrics', 'Sprint Analysis'],
  },
  {
    company: 'Freelance',
    position: 'Video Editor',
    period: 'July 2024– Nov 2024',
    description: 'Delivered high-quality video editing to global clients, automating feedback loops with n8n, AI to streamline iterations.',
    skills: ['No-Code Automation', 'Project Management', 'Agile Tools'],
  },
  {
    company: 'Vreendaar IT Solutions',
    position: 'Business Development Executive',
    period: 'Dec 2023– Feb 2024',
    description: 'Conducted market research and leveraged data analytics to refine sales strategies, improving lead conversion rates.',
    skills: ['Market Analysis', 'Competitive Research', 'Business Intelligence'],
  },
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-2 w-4 h-4 bg-primary-600 rounded-full" />
      <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {experience.position}
          </h3>
          <span className="text-primary-600 font-medium">{experience.period}</span>
        </div>
        <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          {experience.company}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {experience.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey and the roles I've held.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;