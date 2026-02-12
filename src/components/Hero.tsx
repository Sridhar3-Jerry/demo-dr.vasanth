import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaClock, FaPhoneAlt, FaStar } from 'react-icons/fa';
import doctorImage from '../assets/doctor-1.jpg';

const Hero = () => {
  const [doctors, setDoctors] = useState([
    { name: 'Dr. Mehjabeen', degree: 'BDS', id: 1 },
    { name: 'Dr. B. Keerthika', degree: 'BDS', id: 2 },
    { name: 'Dr. J. Sathiya Jeeva', degree: 'BDS, MDS, PhD', id: 3 },
    { name: 'Dr. Basil M Mathew', degree: 'BDS, MDS - Pedodontics', id: 4 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDoctors(prev => [...prev.slice(1), prev[0]]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const cardPositions = [
    { className: 'absolute top-0 left-0 w-72 h-80 z-10' },
    { className: 'absolute top-16 right-0 w-64 h-72 z-20' },
    { className: 'absolute bottom-0 left-16 w-80 h-64 z-30' },
    { className: 'absolute bottom-12 right-8 w-56 h-60 z-15' }
  ];

  return (
    <section id="hero" className="bg-gradient-to-br from-[#f5f0eb] via-white to-[#f5f0eb] min-h-screen px-4 md:px-6 py-6 md:py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#d4a574] mb-4 text-lg font-semibold text-center md:text-left"
          >
            Ivory Dentistry
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-light text-[#b8956a] mb-6 leading-tight"
          >
            The Most Trusted Dental Clinic in Salem
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#8b7355] mb-6 text-lg"
          >
            Advanced Care. Compassionate Smiles. Quality Dental Care for Your Whole Family.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#8b7355] mb-8 leading-relaxed"
          >
            At <span className="font-semibold text-[#b8956a]">Ivory Dentistry</span>, we provide world-class dental solutions tailored to every member of your family. From routine <span className="font-semibold">dental checkups</span> to advanced <span className="font-semibold">laser treatments</span> and <span className="font-semibold">smile makeovers</span>, our expert team in Salem ensures a painless and comfortable experience. We combine state-of-the-art technology with a gentle touch to keep your smile healthy, bright, and confident.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/book-appointment'}
            className="bg-gradient-to-r from-[#b8956a] to-[#8b7355] text-white px-10 py-4 rounded-full hover:shadow-xl mb-8 transition-all font-semibold text-lg cursor-pointer"
          >
            Book Appointment
          </motion.button>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-lg inline-flex"
          >
            <span className="text-[#8b7355] font-semibold">Google Rating</span>
            <span className="font-bold text-[#b8956a] text-2xl">4.7</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <FaStar className="text-lg" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] hidden md:block"
        >
          <AnimatePresence mode="popLayout">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className={`${cardPositions[index].className} rounded-[2rem] overflow-hidden shadow-2xl`}
              >
                <img src={doctorImage} alt={doctor.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="font-bold text-lg mb-1 text-white">{doctor.name}</p>
                  <p className="text-sm text-white/90">{doctor.degree}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#d4a574]/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#b8956a]/10 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Mobile Slider */}
        <div className="md:hidden relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={doctors[0].id}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img src={doctorImage} alt={doctors[0].name} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="font-bold text-xl mb-1 text-white">{doctors[0].name}</p>
                <p className="text-sm text-white/90">{doctors[0].degree}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-4 md:mt-6">
        <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-3xl shadow-2xl p-6 flex items-center gap-4 border border-[#d4a574]/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#d4a574] to-[#b8956a] rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                <FaClock className="text-2xl" />
              </div>
              <div>
                <p className="font-bold text-[#b8956a] mb-1">Opening Hours</p>
                <p className="text-sm text-[#8b7355]">Mon to Sat 09:00 AM - 08:30 PM</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-3xl shadow-2xl p-6 flex items-center gap-4 border border-[#d4a574]/20"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#b8956a] to-[#8b7355] rounded-2xl flex items-center justify-center text-white flex-shrink-0">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div>
                <p className="font-bold text-[#b8956a] mb-1">Need Dental Services?</p>
                <p className="text-sm text-[#8b7355]">Call: +91-9087669000</p>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
