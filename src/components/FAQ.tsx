import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How often should I visit the dentist?',
      answer: 'We recommend visiting the dentist every 6 months for routine checkups and cleanings. However, some patients may need more frequent visits depending on their oral health needs.'
    },
    {
      question: 'What should I do in a dental emergency?',
      answer: 'For dental emergencies such as severe pain, broken teeth, or knocked-out teeth, contact us immediately. We provide emergency dental services and will see you as soon as possible to address the issue.'
    },
    {
      question: 'Do you offer services for kids?',
      answer: 'Yes! We offer comprehensive pediatric dentistry services in a fun, child-friendly environment. We recommend bringing your child for their first dental visit by their first birthday or when their first tooth appears.'
    },
    {
      question: 'What are my options for replacing missing teeth?',
      answer: 'We offer several options including dental implants, bridges, and dentures. Dental implants are the gold standard for tooth replacement, providing a permanent solution that looks and functions like natural teeth.'
    },
    {
      question: 'Is teeth whitening safe?',
      answer: 'Yes, professional teeth whitening is safe when performed by our experienced dental team. We use advanced whitening technology that effectively removes stains while protecting your tooth enamel.'
    }
  ];

  return (
    <section id="faq" className="bg-gradient-to-b from-white to-gray-50 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left md:text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaQuestionCircle className="text-[var(--primary)] text-3xl" />
            <p className="text-[var(--primary)] uppercase tracking-wider text-sm font-semibold text-center">Everything You Need To Know</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--tertiary)] mb-6 text-left md:text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our dental services, treatments, and clinic policies.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors group"
              >
                <span className="text-gray-800 font-semibold text-lg pr-4 group-hover:text-[var(--primary)] transition-colors">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[var(--primary)] flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-all"
                >
                  <FaChevronDown className="text-sm" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-[var(--secondary)] mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Our friendly team is here to help.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
            className="bg-[var(--primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--primary-hover)] transition-colors cursor-pointer"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
