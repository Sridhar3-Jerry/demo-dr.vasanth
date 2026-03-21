import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaTooth } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { treatmentData } from '../data/treatments';

const TreatmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const treatment = treatmentData.find(t => t.id === id);
  const treatmentIndex = treatmentData.findIndex(t => t.id === id);
  const layoutType = treatmentIndex % 3;

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-800">Treatment not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[var(--primary)] hover:text-gray-800 mb-6 font-semibold"
        >
          <FaArrowLeft /> Back to Home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <p className="text-[var(--primary)] mb-2 text-lg text-center">Our Specialities</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-6 text-center">{treatment.title}</h1>
        </motion.div>

        {/* Layout 1: Modern Card Grid with Glassmorphism */}
        {layoutType === 0 && (
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
                >
                  <img src={treatment.images[0]} alt={treatment.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="h-36 rounded-xl overflow-hidden shadow-md group"
                  >
                    <img src={treatment.images[1]} alt={treatment.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </motion.div>
                  {treatment.images[2] && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className="h-36 rounded-xl overflow-hidden shadow-md group"
                    >
                      <img src={treatment.images[2]} alt={treatment.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-col justify-center space-y-6"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white p-8 rounded-2xl shadow-lg backdrop-blur-sm"
                >
                  <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4 flex items-center gap-3">
                    <motion.div 
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <FaTooth className="text-[var(--primary)]" />
                    </motion.div>
                    About This Treatment
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{treatment.introduction}</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  className="bg-gradient-to-br from-[var(--primary)] to-[#8b6f47] text-white p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="font-bold text-xl mb-2">Book Your Consultation</h3>
                  <p className="mb-4 opacity-90">Get expert advice from our specialists</p>
                  <motion.a 
                    href="/book-appointment" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl transition-shadow"
                  >
                    <FaTooth /> Book Appointment
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Layout 2: Parallax Hero with Floating Cards */}
        {layoutType === 1 && (
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative h-96 rounded-3xl overflow-hidden mb-8 shadow-2xl"
            >
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={treatment.images[0]} 
                alt={treatment.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center text-white px-6 max-w-3xl">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
                  >
                    Professional {treatment.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-lg md:text-xl drop-shadow-md"
                  >
                    {treatment.introduction}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white p-6 rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="h-48 rounded-xl overflow-hidden mb-4">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={treatment.images[1]} 
                    alt={treatment.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--secondary)] mb-2 flex items-center gap-2">
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    className="text-[var(--primary)]"
                  >
                    ✓
                  </motion.span>
                  Expert Care
                </h3>
                <p className="text-gray-700">Advanced techniques with experienced professionals</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white p-6 rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="h-48 rounded-xl overflow-hidden mb-4">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={treatment.images[2] || treatment.images[0]} 
                    alt={treatment.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-bold text-[var(--secondary)] mb-2 flex items-center gap-2">
                  <motion.span 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
                    className="text-[var(--primary)]"
                  >
                    ✓
                  </motion.span>
                  Modern Technology
                </h3>
                <p className="text-gray-700">State-of-the-art equipment for best results</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-[var(--primary)] to-[#8b6f47] text-white p-6 rounded-2xl shadow-lg"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FaTooth className="text-5xl mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Book Appointment</h3>
                  <p className="mb-4 opacity-90">Schedule your consultation today</p>
                  <motion.a 
                    href="/book-appointment" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-5 py-3 rounded-xl font-semibold shadow-md"
                  >
                    <FaTooth /> Book Appointment
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Layout 3: Bento Box Modern Layout */}
        {layoutType === 2 && (
          <div className="mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg"
              >
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-[var(--secondary)] mb-6 flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[#8b6f47] rounded-full flex items-center justify-center"
                  >
                    <FaTooth className="text-white text-lg" />
                  </motion.div>
                  Treatment Overview
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-700 leading-relaxed mb-6 text-lg"
                >
                  {treatment.introduction}
                </motion.p>
                {treatment.description && (
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-700 leading-relaxed mb-6"
                  >
                    {treatment.description}
                  </motion.p>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className="h-40 rounded-xl overflow-hidden shadow-md group"
                  >
                    <img src={treatment.images[1]} alt={treatment.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </motion.div>
                  {treatment.images[2] && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.05, rotate: -3 }}
                      className="h-40 rounded-xl overflow-hidden shadow-md group"
                    >
                      <img src={treatment.images[2]} alt={treatment.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative h-56 rounded-2xl overflow-hidden shadow-lg group"
                >
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={treatment.images[0]} 
                    alt={treatment.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  className="bg-gradient-to-br from-[var(--primary)] to-[#8b6f47] text-white p-6 rounded-2xl shadow-lg text-center"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <FaTooth className="text-4xl mx-auto mb-3" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
                  <p className="mb-4 opacity-90">Contact us for a consultation</p>
                  <motion.a 
                    href="/book-appointment" 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white text-[var(--primary)] px-6 py-3 rounded-xl font-semibold shadow-md"
                  >
                    <FaTooth /> Book Appointment
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Candidates Section */}
        {treatment.candidates && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8 border-l-4 border-[var(--primary)]"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-[var(--secondary)] mb-4 flex items-center gap-3"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-[var(--primary)] text-3xl"
              >
                •
              </motion.span>
              Who Can Benefit?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 leading-relaxed text-lg"
            >
              {treatment.candidates}
            </motion.p>
          </motion.div>
        )}

        {/* Treatment Procedure */}
        {treatment.procedure && treatment.procedure.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg mb-8"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[var(--secondary)] mb-8 text-center"
            >
              Treatment Steps
            </motion.h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {treatment.procedure.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ rotate: 360 }}
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[#8b6f47] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                  >
                    {index + 1}
                  </motion.div>
                  <p className="text-gray-700 leading-relaxed text-lg flex-1">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Benefits */}
        {treatment.benefits && treatment.benefits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg mb-8"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[var(--secondary)] mb-8 text-center"
            >
              Key Benefits
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {treatment.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-start gap-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    <FaCheckCircle className="text-[var(--primary)] text-2xl mt-1 flex-shrink-0" />
                  </motion.div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
          className="bg-gradient-to-br from-[var(--primary)] via-[#9a7a5c] to-[#8b6f47] text-white p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
          />
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-8 text-lg md:text-xl opacity-95"
            >
              Book your appointment today and let us take care of your smile
            </motion.p>
            <motion.a 
              href="/book-appointment"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-[var(--primary)] px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <FaTooth />
              </motion.div>
              Book Appointment
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TreatmentDetail;
