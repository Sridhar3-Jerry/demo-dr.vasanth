import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
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
          className="text-left md:text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--tertiary)] mb-4">Our Treatments</h2>
          <p className="text-gray-800 max-w-3xl mx-auto">
            From general dentistry wellness, to perfecting cosmetic imperfections, to restoring implants and fillings, to those painful oral emergencies—we have you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ x: 5, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
              onClick={() => navigate(`/treatment/${service.id}`)}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 group"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--primary)] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-xl">🦷</span>
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[var(--primary)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--primary)] transition-all">
                  <span className="text-[var(--primary)] group-hover:text-white text-lg font-bold transition-colors">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
