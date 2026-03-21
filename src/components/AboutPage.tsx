import { motion } from 'framer-motion';
import { FaTooth, FaHeart, FaAward, FaUsers } from 'react-icons/fa';
import aboutUsImage from '../assets/aboutus-1.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[var(--secondary)] mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Your trusted partner in dental care</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12"
        >
          <img src={aboutUsImage} alt="Dental Clinic" className="w-full h-80 object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We provide exceptional dental care for the whole family. Our experienced team combines modern technology with compassionate service to ensure every visit is comfortable and effective.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { img: aboutUsImage, title: 'Our Mission', desc: 'Delivering personalized, high-quality dental care that enhances your oral health and overall well-being.' },
            { img: aboutUsImage, title: 'Our Vision', desc: 'To be the leading dental care provider known for innovation, excellence, and patient-centered service.' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: FaTooth, title: 'Expert Care', desc: 'Skilled professionals dedicated to your smile' },
            { icon: FaHeart, title: 'Patient First', desc: 'Compassionate service tailored to you' },
            { icon: FaAward, title: 'Quality Service', desc: 'Excellence in every treatment' },
            { icon: FaUsers, title: 'Family Friendly', desc: 'Welcoming care for all ages' }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <Icon className="text-5xl text-[var(--primary)] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[var(--secondary)] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/book-appointment'}
            className="bg-[var(--primary)] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg"
          >
            Book Your Appointment
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
