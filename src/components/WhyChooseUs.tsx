import { motion } from 'framer-motion';
import { FaTooth } from 'react-icons/fa';
import whychooseus from '../assets/whychooseus.jpg'

const WhyChooseUs = () => {
  const features = [
    'Experienced Team of Doctors',
    'Superior Hygienic Environment',
    'Modern Equipment',
    'Pain-Free Procedure',
    'Comprehensive Services',
    'Affordable cost'
    
  ];

  return (
    <section id="why-choose-us" className=" px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--tertiary)] mb-6">Why People Trust Us?</h2>
            <p className="text-[#6b7280] mb-8 leading-relaxed">
              At Dental Clip Dental Clinic, we prioritize a hygienic environment and patient safety through rigorous sterilization protocols. We ensure the highest standards of infection control during dental procedures.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-[var(--bg-light)] p-4 rounded-lg border-l-4 border-[var(--primary)]"
                >
                  <div className="w-10 h-10 bg-[#fef3e6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaTooth className="text-[var(--primary)] text-xl" />
                  </div>
                  <p className="text-[var(--tertiary)] font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src={whychooseus}
              alt="Dental implants" 
              className="w-full max-w-md border-gray-900 rounded-lg shadow object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
