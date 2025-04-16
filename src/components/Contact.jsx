import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/aishwarye-jain-9535b4221/',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:jainaishwarye@gmail.com'
  },
];

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });
    
    // Basic email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        submitted: true,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    emailjs.sendForm(
      'service_iqxvxvp',
      'template_sgsk6nk',
      form.current,
      'Ot4Hn5Ue2Ue0Ue1Ue'
    )
      .then((result) => {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Message sent successfully!'
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatus({
          submitting: false,
          submitted: true,
          error: true,
          message: 'Failed to send message.'
        });
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.form
            ref={form}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {status.submitted && (
              <div className={`mt-4 p-3 rounded-lg ${status.error ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200' : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'}`}>
                {status.message}
              </div>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Connect with me
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to reach out through any of these platforms:
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;