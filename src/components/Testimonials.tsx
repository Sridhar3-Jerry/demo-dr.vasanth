import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaUser, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const testimonials = [
    {
      name: 'Senthil Raja',
      role: 'Patient',
      text: 'I am very Happy with the well experienced dental surgery Doctor. The clinic is very nice and modern. The Doctors are friendly, always explains what is going on in the mouth, as well as what are all the options to fix it. Quality treatment with quick recovery of dental issues. Clinic staff are very polite and kind with patients.'
    },
    {
      name: 'Santhosh J',
      role: 'Patient',
      text: 'Ivory Dental Clinic offers exceptional dental care with a highly professional and friendly team. The clinic is well-maintained, and appointments are efficiently managed. My wife had a very comfortable experience, and the treatment was thorough and effective. Highly recommended for quality dental services in Salem.'
    },
    {
      name: 'Shiva',
      role: 'Patient',
      text: 'My recent visit to Ivory Dental Hospital was an amazing experience. The hospital has hygienic, comfortable facilities and up-to-date technologies. The doctors and staff were professional. The clinic provides a variety of dental services under one roof. I felt secure and pleased with my care.'
    },
    {
      name: 'Krishna Prakash',
      role: 'Patient',
      text: 'I had good experience at this clinic for my root canal treatment. The doctors and staff were professional, friendly and took me through out the process. The ambience was good and the treatment was painless.'
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section id="testimonials" className="bg-white px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#d4a574] mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#b8956a] mb-4">Our Happy Customers</h2>
          <p className="text-[#8b7355] max-w-2xl mx-auto">
            Join thousands of happy patients who trust us for gentle, expert care and beautiful smiles. Your perfect dental experience starts here!
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:bg-[#d4a574] hover:text-white text-[#b8956a] border border-[#d4a574]/20"
            aria-label="Previous testimonials"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:bg-[#d4a574] hover:text-white text-[#b8956a] border border-[#d4a574]/20"
            aria-label="Next testimonials"
          >
            <FaChevronRight />
          </button>

          <div className="overflow-hidden px-2">
            {/* Desktop - 3 cards */}
            <motion.div 
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="hidden md:grid grid-cols-3 gap-6"
            >
              {testimonials.slice(currentIndex, currentIndex + itemsPerPage).map((testimonial, idx) => {
                const actualIndex = currentIndex + idx;
                const isExpanded = expandedCard === actualIndex;
                
                return (
                  <div
                    key={actualIndex}
                    className="bg-white rounded-2xl p-6 min-h-[300px] flex flex-col shadow-lg hover:shadow-xl transition-all border border-[#d4a574]/10 hover:border-[#d4a574]/30"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a574] to-[#b8956a] flex items-center justify-center flex-shrink-0">
                        <FaUser className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-[#b8956a] font-bold">{testimonial.name}</h4>
                        <p className="text-[#8b7355] text-sm italic">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#d4a574] text-sm" />
                      ))}
                    </div>
                    <div className="relative flex-grow">
                      <div className="absolute -left-1 -top-1 text-[#d4a574] text-5xl font-serif opacity-30">&ldquo;</div>
                      <p className="text-[#6b5d4f] leading-relaxed relative z-10 pl-5">
                        {testimonial.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Mobile - 1 card */}
            <motion.div 
              key={`mobile-${currentIndex}`}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="md:hidden"
            >
              <div className="bg-white rounded-2xl p-6 min-h-[280px] flex flex-col shadow-lg border border-[#d4a574]/10">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4a574] to-[#b8956a] flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#b8956a] font-bold">{testimonials[currentIndex % testimonials.length].name}</h4>
                    <p className="text-[#8b7355] text-sm italic">{testimonials[currentIndex % testimonials.length].role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#d4a574] text-sm" />
                  ))}
                </div>
                <div className="relative flex-grow">
                  <div className="absolute -left-1 -top-1 text-[#d4a574] text-5xl font-serif opacity-30">&ldquo;</div>
                  <p className="text-[#6b5d4f] leading-relaxed relative z-10 pl-5">
                    {testimonials[currentIndex % testimonials.length].text}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#b8956a] w-8' : 'bg-[#d4a574]/30 w-2 hover:bg-[#d4a574]/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
