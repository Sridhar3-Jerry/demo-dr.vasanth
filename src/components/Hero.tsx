import { motion } from 'framer-motion';
import { FaClock, FaPhoneAlt, FaStar } from 'react-icons/fa';
import doctorImage from '../assets/doctor-1.jpg';

const Hero = () => {
  const doctors = [
    { name: 'Dr. Mehjabeen', degree: 'BDS' },
    { name: 'Dr. B. Keerthika', degree: '' },
    { name: 'Dr. J. Sathiya Jeeva', degree: 'BDS, MDS, PhD' },
    { name: 'Dr. Basil M Mathew', degree: 'BDS, MDS - Pedodontics' }
  ];

  return (
    <section id="hero" className="bg-gradient-to-br from-[#f5f0eb] via-white to-[#f5f0eb] min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#d4a574] mb-4 text-lg font-semibold"
          >
            Ivory Dentistry
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-light text-[#b8956a] mb-6 leading-tight"
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
            className="bg-gradient-to-r from-[#b8956a] to-[#8b7355] text-white px-10 py-4 rounded-full hover:shadow-xl mb-8 transition-all font-semibold text-lg"
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
          className="relative h-[600px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-0 left-0 w-72 h-80 bg-gradient-to-br from-[#b8956a] to-[#8b7355] rounded-[2rem] p-6 text-white shadow-2xl z-10"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center backdrop-blur-sm">
              <img src={doctorImage} alt="doctor" className="w-full h-full object-cover rounded-full" />
            </div>
            <p className="font-bold text-lg mb-1">{doctors[0].name}</p>
            <p className="text-sm text-white/90">{doctors[0].degree}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-16 right-0 w-64 h-72 bg-gradient-to-br from-[#d4a574] to-[#b8956a] rounded-[2rem] p-6 text-white shadow-2xl z-20"
          >
            <div className="w-14 h-14 bg-white/20 rounded-full mb-4 flex items-center justify-center backdrop-blur-sm">
              <img src={doctorImage} alt="doctor" className="w-full h-full object-cover rounded-full" />
            </div>
            <p className="font-bold mb-1">{doctors[1].name}</p>
            <p className="text-xs text-white/90">{doctors[1].degree}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-0 left-16 w-80 h-64 bg-gradient-to-br from-[#8b7355] to-[#b8956a] rounded-[2rem] p-6 text-white shadow-2xl z-30"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center backdrop-blur-sm">
              <img src={doctorImage} alt="doctor" className="w-full h-full object-cover rounded-full" />
            </div>
            <p className="font-bold text-lg mb-1">{doctors[2].name}</p>
            <p className="text-sm text-white/90">{doctors[2].degree}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 right-8 w-56 h-60 bg-gradient-to-br from-[#b8956a] to-[#d4a574] rounded-[2rem] p-5 text-white shadow-2xl z-15"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full mb-3 flex items-center justify-center backdrop-blur-sm">
              <img src={doctorImage} alt="doctor" className="w-full h-full object-cover rounded-full" />
            </div>
            <p className="font-bold mb-1">{doctors[3].name}</p>
            <p className="text-xs text-white/90">{doctors[3].degree}</p>
          </motion.div>

          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#d4a574]/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#b8956a]/10 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-6">
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
