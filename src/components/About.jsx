import { motion } from 'framer-motion';
import { profileImageData } from '../assets/profileImage';

const skills = [
  { name: 'Figma', level: '90%' },
  { name: 'SQL', level: '75%' },
  { name: 'Power BI', level: '80%' },
  { name: 'Agile Methodology', level: '75%' },
  { name: 'Jira', level: '70%' },
  { name: 'Automation', level: '80%' },
];

const About = () => {
  return (
    <section id="about" className="section relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl transform -rotate-12" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl transform rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 dark:text-white"
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 text-justify leading-relaxed"
            >
              Pre-final year engineering student proficient in SQL, Python, Power BI, and automation tools like n8n and Voiceflow. 
              Passionate about product strategy, data analytics, and building smart, scalable systems. Experienced in developing 
              digital products, interactive dashboards, and data-driven solutions to drive growth and enhance user experience.
            </motion.p>
          </div>

          <div className="space-y-8">
            <div className="relative w-80 h-80 mx-auto">
              {/* Profile image container with enhanced effects */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="absolute inset-4 bg-gradient-to-tr from-primary-200 to-blue-200 dark:from-primary-800 dark:to-blue-800 rounded-full blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-primary-900/50 rounded-full"
              />
              {/* Profile Image with enhanced container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={profileImageData}
                  alt="Aishwarye Jain"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-primary-600 dark:text-primary-400">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full shadow-lg"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 