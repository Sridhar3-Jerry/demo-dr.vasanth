import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-4 md:pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-[var(--primary)] uppercase tracking-wider text-sm font-semibold mb-4 text-center">Get In Touch With Paramathi Velur's Preferred Dental Experts</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-6 text-left md:text-center">
            We Are Always Ready to Help<br />You and Answer Your Questions
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="bg-[var(--bg-light)] rounded-2xl p-6 shadow-lg border-2 border-[var(--border)]">
              <div className="flex items-center gap-4 mb-2">
                <FaClock className="text-[var(--primary)] text-2xl" />
                <h3 className="text-lg font-bold text-[var(--secondary)]">We're Open</h3>
              </div>
              <p className="text-gray-700 text-sm ml-10">Monday – Friday</p>
              <p className="text-gray-700 font-semibold text-sm ml-10">09.00 Am – 8.30 Pm</p>
            </div>

            <div className="bg-[var(--bg-light)] rounded-2xl p-6 shadow-lg border-2 border-[var(--border)]">
              <div className="flex items-center gap-4 mb-2">
                <FaPhoneAlt className="text-[var(--primary)] text-2xl" />
                <h3 className="text-lg font-bold text-[var(--secondary)]">Call Us Directly</h3>
              </div>
              <a href="tel:+919344310422" className="block hover:text-[var(--primary)] font-medium text-gray-700 text-sm ml-10">+91-9344310422</a>
            </div>

            <div className="bg-[var(--bg-light)] rounded-2xl p-6 shadow-lg border-2 border-[var(--border)]">
              <div className="flex items-center gap-4 mb-2">
                <FaMapMarkerAlt className="text-[var(--primary)] text-2xl" />
                <h3 className="text-lg font-bold text-[var(--secondary)]">Clinic Location</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm ml-10">
                First Floor, Latha Rajagopalan Hospital, Old Bypass Road, Paramathi Velur, Namakkal – 638182,<br />
                Tamil Nadu, India.
              </p>
            </div>

            <div className="bg-[var(--bg-light)] rounded-2xl p-6 shadow-lg border-2 border-[var(--border)]">
              <div className="flex items-center gap-4 mb-2">
                <FaEnvelope className="text-[var(--primary)] text-2xl" />
                <h3 className="text-lg font-bold text-[var(--secondary)]">Send a Message</h3>
              </div>
              <a href="mailto:dentalclip.dentalclinic@gmail.com" className="text-gray-700 hover:text-[var(--primary)] break-all font-medium text-sm ml-10">
                dentalclip.dentalclinic@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-[var(--border)]">
              <h2 className="text-3xl font-bold text-[var(--secondary)] mb-4">Get In Touch</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At <span className="font-semibold text-[var(--primary)]">Dental Clip. Dental Clinic</span>, your comfort and convenience come first. Whether you have a question about a specific treatment, a suggestion for our team, or you are ready to book your consultation, we are here for you.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Simply fill out the form below with your details, and our patient coordinator will get back to you shortly. For immediate assistance or to schedule an <span className="font-semibold text-[var(--primary)]">emergency dental appointment in Paramathi Velur</span>, feel free to call us directly.
              </p>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 resize-none transition-colors"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[var(--primary)] text-white py-4 rounded-xl font-bold text-lg hover:bg-[var(--primary-hover)] transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
