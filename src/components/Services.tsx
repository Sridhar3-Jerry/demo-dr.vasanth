import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 'braces',
      title: 'Braces',
      description: 'Traditional metal braces are the most common type of orthodontic treatment. They use metal brackets and wires to gradually move teeth into proper alignment.'
    },
    {
      id: 'invisalign',
      title: 'Invisalign',
      description: 'Clear, removable aligners that gradually straighten teeth without the need for metal brackets and wires. Nearly invisible and comfortable to wear.'
    },
    {
      id: 'cosmetic-dentistry',
      title: 'Cosmetic Dentistry',
      description: 'Comprehensive cosmetic treatments to enhance your smile including teeth whitening, bonding, and smile makeovers for improved aesthetics.'
    },
    {
      id: 'veneers',
      title: 'Veneers/Laminates',
      description: 'Thin porcelain or composite shells bonded to the front surface of teeth to improve appearance, covering stains, chips, or gaps.'
    },
    {
      id: 'laser-dentistry',
      title: 'Laser Dentistry',
      description: 'Advanced laser technology for precise, minimally invasive dental procedures with reduced pain, bleeding, and faster healing times.'
    },
    {
      id: 'root-canal-treatment',
      title: 'Root Canal Treatment',
      description: 'Endodontic therapy to save infected or severely damaged teeth by removing infected pulp and sealing the tooth to prevent further infection.'
    },
    {
      id: 'dental-filling',
      title: 'Dental Filling',
      description: 'Tooth-colored composite fillings to restore teeth affected by decay, providing natural-looking and durable results.'
    },
    {
      id: 'dental-crown-bridges',
      title: 'Dental Crown and Bridges',
      description: 'Custom-made crowns to restore damaged teeth and bridges to replace missing teeth, restoring both function and appearance.'
    },
    {
      id: 'dental-implants',
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution using titanium implants that integrate with your jawbone to support crowns, bridges, or dentures.'
    },
    {
      id: 'tmj-treatment',
      title: 'TMJ/TMD Treatments',
      description: 'Comprehensive treatment for temporomandibular joint disorders, addressing jaw pain, clicking, and dysfunction with various therapeutic approaches.'
    },
    {
      id: 'gum-recontouring',
      title: 'Gum Recontouring',
      description: 'Cosmetic gum reshaping to create a more balanced and attractive smile by removing excess gum tissue or reshaping the gum line.'
    },
    {
      id: 'child-dentistry',
      title: 'Child Dentistry',
      description: 'Specialized pediatric dental care for infants, children, and adolescents, focusing on prevention, education, and gentle treatment approaches.'
    },
    {
      id: 'wisdom-tooth-removal',
      title: 'Wisdom Tooth Removal',
      description: 'Safe and comfortable extraction of wisdom teeth to prevent crowding, impaction, and other oral health complications.'
    }
  ];

  return (
    <section id="services" className="bg-white px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--tertiary)] mb-4">Our Treatments</h2>
          <p className="text-gray-800 max-w-3xl mx-auto">
            From general dentistry wellness, to perfecting cosmetic imperfections, to restoring implants and fillings, to those painful oral emergencies—we have you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg relative"
            >
              <div className="w-12 h-12 bg-white border-2 border-[var(--primary)] rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🦷</span>
              </div>
              <h3 className="text-xl font-bold text-[var(--secondary)] mb-3">{service.title}</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-4">{service.description}</p>
              
              <motion.button
                onClick={() => navigate(`/treatment/${service.id}`)}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                animate={{
                  width: hoveredCard === index ? '140px' : '40px'
                }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="h-10 border-2 border-[var(--primary)] rounded-full flex items-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors overflow-hidden relative"
              >
                <motion.div
                  animate={{
                    x: hoveredCard === index ? 8 : 0
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="absolute left-0 w-9 h-full flex items-center justify-center"
                >
                  <span className="text-lg">+</span>
                </motion.div>
                <motion.span
                  animate={{ 
                    opacity: hoveredCard === index ? 1 : 0,
                    x: hoveredCard === index ? 0 : -25
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  className="text-sm font-medium whitespace-nowrap ml-12"
                >
                  Read more
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
