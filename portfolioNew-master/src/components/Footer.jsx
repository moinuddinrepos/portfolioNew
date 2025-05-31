import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const imageUrls = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',   // nature
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',   // tech
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',   // city
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',   // mountains
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',   // beach
//   'https://photos.app.goo.gl/RLwaXNJuPSZ5MoS87',
];

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageUrls.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setErrors({});
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(formErrors);
      setSubmitted(false);
    }
  };

  return (
    <>
      {/* Contact + Gallery Section */}
      <div className="flex flex-col lg:flex-row gap-12 px-6 py-20 bg-[#f8f1fc]">
        {/* Contact */}
        <section id="contact" className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-[#673579] mb-4 text-center">Contact</h2>
          <p className="text-gray-700 mb-8 text-center">Let's collaborate on your next big idea!</p>

          {submitted && (
            <div className="mb-6 text-green-600 font-semibold text-center">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-[#673579]'}`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#673579]'}`}
                placeholder="Your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none transition resize-none ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-[#673579]'}`}
                placeholder="Your message"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#673579] text-white px-8 py-3 rounded hover:bg-[#e9a7ff] hover:text-[#673579] font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Gallery */}
        {/* Gallery */}
<section className="w-full lg:w-1/2 flex items-center justify-center">
  <div className="w-full max-w-xl h-[500px] rounded-lg overflow-hidden shadow-lg transition duration-700 ease-in-out">
    <img
      src={imageUrls[current]}
      alt="Gallery Slide"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</section>

      </div>

      {/* Footer */}
      <footer className="bg-[#673579] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Md Khaja Moinuddin. All rights reserved.
          </p>

          <nav className="space-x-6 mb-4 md:mb-0">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          <div className="flex space-x-6 text-2xl">
            <a href="https://github.com/moinuddinrepos" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/moinuddin006" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="mdkhajamoinuddincm035@gmail.com" aria-label="Email" className="hover:text-gray-300">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
