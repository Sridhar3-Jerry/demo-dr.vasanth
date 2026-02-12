import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import aboutUsImage from '../assets/aboutus-1.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f0eb] pt-24 pb-16">
      {/* Section 1: Professionals and Personalized Dental Excellence */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={aboutUsImage}
              alt="Dental care"
              className="w-full h-64 object-cover rounded-3xl shadow-xl"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={aboutUsImage}
              alt="Dental treatment"
              className="w-full h-64 object-cover rounded-3xl shadow-xl mt-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-[#d4a574] mb-4 text-lg">About Us</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#b8956a] mb-6">
              Professionals and Personalized Dental Excellence
            </h2>
            <p className="text-[#8b7355] mb-8 leading-relaxed">
              We offer high-quality dental care tailored for the whole family. From routine checkups to advanced treatments, our compassionate team ensures your smile stays healthy and confident.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#b8956a] mt-1 flex-shrink-0" />
                <span className="text-[#8b7355]">Personalized Treatment Plans</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#b8956a] mt-1 flex-shrink-0" />
                <span className="text-[#8b7355]">State-of-the-Art Technology</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#b8956a] mt-1 flex-shrink-0" />
                <span className="text-[#8b7355]">Gentle Care for Kids and Adults</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#b8956a] mt-1 flex-shrink-0" />
                <span className="text-[#8b7355]">Flexible Appointment Scheduling</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#b8956a] text-white px-8 py-3 rounded-lg hover:bg-[#8b7355] transition-colors"
            >
              Book Appointment
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Exceptional Service With a Personal Touch */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#d4a574] mb-4 text-lg">Why Choose Our Dental Care</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#b8956a] mb-6">
              Exceptional Service With a Personal Touch
            </h2>
            <p className="text-[#8b7355] mb-8 leading-relaxed">
              Choosing the right dental provider matters. We combine expert care, advanced technology, and a warm atmosphere to ensure every visit is comfortable, efficient, and tailored to your unique needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[#b8956a] font-semibold mb-2">Experienced Dental</h3>
                <p className="text-[#8b7355] text-sm">Skilled care backed by years of trusted dental experience.</p>
              </div>
              <div>
                <h3 className="text-[#b8956a] font-semibold mb-2">Advanced Technology</h3>
                <p className="text-[#8b7355] text-sm">Modern tools ensure accurate and efficient treatments.</p>
              </div>
              <div>
                <h3 className="text-[#b8956a] font-semibold mb-2">Personalized Treatment</h3>
                <p className="text-[#8b7355] text-sm">Custom care plans made to fit your smile and lifestyle.</p>
              </div>
              <div>
                <h3 className="text-[#b8956a] font-semibold mb-2">Family-Friendly</h3>
                <p className="text-[#8b7355] text-sm">Welcoming space for kids, teens, adults, and seniors.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={aboutUsImage}
              alt="Dental care"
              className="w-full h-48 object-cover rounded-2xl shadow-xl"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={aboutUsImage}
              alt="Dental treatment"
              className="w-full h-48 object-cover rounded-2xl shadow-xl mt-8"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={aboutUsImage}
              alt="Dental clinic"
              className="w-full h-48 object-cover rounded-2xl shadow-xl -mt-8"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={aboutUsImage}
              alt="Dental equipment"
              className="w-full h-48 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
