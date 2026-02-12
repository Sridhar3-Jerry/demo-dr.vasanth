import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import aboutUsImage from '../assets/aboutus-1.jpg';

const DentalInsights = () => {
  const [selectedInsight, setSelectedInsight] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const insights = [
    {
      title: 'Discover 10 Easy Tips to Maintain a Healthier and Brighter Smile Today',
      image: aboutUsImage,
      excerpt: 'Learn simple daily habits that can transform your oral health and keep your smile radiant.',
      content: 'Maintaining a healthy smile doesn\'t have to be complicated. Start by brushing twice daily with fluoride toothpaste, flossing regularly, and limiting sugary foods. Regular dental checkups every six months help catch issues early. Stay hydrated to promote saliva production, which naturally cleanses your mouth. Consider using mouthwash for extra protection against bacteria. Eat crunchy fruits and vegetables that naturally clean teeth. Avoid tobacco products that stain and damage teeth. Replace your toothbrush every three months. These simple habits will keep your smile bright and healthy for years to come.'
    },
    {
      title: 'Is Teeth Whitening Safe and Effective? Here\'s What You Need to Know',
      image: aboutUsImage,
      excerpt: 'Everything you need to know about professional teeth whitening procedures and their benefits.',
      content: 'Professional teeth whitening is both safe and effective when performed by qualified dental professionals. The procedure uses carefully controlled bleaching agents to remove stains and discoloration. Results can last from several months to a few years depending on your habits. Professional whitening is more effective than over-the-counter products and provides consistent results. Side effects like temporary sensitivity are minimal and manageable. The treatment is customized to your specific needs and desired shade. Multiple sessions may be needed for optimal results. Maintaining good oral hygiene and avoiding staining foods helps preserve your bright smile.'
    },
    {
      title: 'Braces vs. Clear Aligners: Which Orthodontic Option Fits You Best?',
      image: aboutUsImage,
      excerpt: 'Compare the pros and cons of traditional braces and modern clear aligners for your perfect smile.',
      content: 'Choosing between braces and clear aligners depends on your specific needs. Traditional braces are highly effective for complex cases and work 24/7. Clear aligners offer a nearly invisible option with removable convenience. Braces typically cost less but require more frequent adjustments. Aligners need discipline to wear 20-22 hours daily. Treatment time varies but averages 12-24 months for both. Braces may cause initial discomfort, while aligners are generally more comfortable. Clear aligners allow easier eating and cleaning. Your orthodontist will recommend the best option based on your case complexity, lifestyle, and budget.'
    },
    {
      title: 'What to Expect During Your First Visit to the Dentist\'s Office',
      image: aboutUsImage,
      excerpt: 'A comprehensive guide to help you prepare for your first dental appointment with confidence.',
      content: 'Your first dental visit is an important step toward optimal oral health. Expect a comprehensive examination of your teeth, gums, and mouth. The dentist will review your medical history and discuss any concerns. X-rays may be taken to assess hidden issues. A professional cleaning removes plaque and tartar buildup. The dentist will check for cavities, gum disease, and other problems. You\'ll receive personalized advice on improving your oral hygiene routine. Treatment recommendations will be discussed if needed. The visit typically lasts 60-90 minutes. Don\'t hesitate to ask questions about procedures or concerns.'
    },
    {
      title: '5 Warning Signs You May Need a Root Canal and Why It\'s Not So Bad',
      image: aboutUsImage,
      excerpt: 'Understand the symptoms that indicate you need a root canal and why modern treatment is painless.',
      content: 'Root canals have an undeserved bad reputation. Warning signs include severe toothache, prolonged sensitivity to hot or cold, tooth discoloration, swollen gums, and a persistent pimple on the gums. Modern root canal procedures are virtually painless thanks to advanced anesthesia. The treatment saves your natural tooth and prevents infection spread. Most procedures are completed in one or two visits. Recovery is quick with minimal discomfort. The alternative to root canal is tooth extraction, which is more invasive. Success rates exceed 95% with proper care. Don\'t delay treatment as infections can worsen quickly.'
    },
    {
      title: 'How to Protect Your Child\'s Teeth and Prevent Cavities Early On',
      image: aboutUsImage,
      excerpt: 'Essential tips for parents to ensure their children develop strong, healthy teeth from an early age.',
      content: 'Protecting your child\'s teeth starts early. Begin cleaning gums even before teeth emerge. Use fluoride toothpaste once teeth appear, but only a rice-grain amount for infants. Schedule the first dental visit by age one. Limit sugary drinks and snacks between meals. Encourage water drinking throughout the day. Teach proper brushing technique and supervise until age 7-8. Consider dental sealants to protect molars from decay. Make dental visits fun and positive experiences. Lead by example with your own oral hygiene. Establish a consistent routine of brushing twice daily and flossing. Early habits set the foundation for lifelong dental health.'
    }
  ];

  const handleCardClick = (index: number) => {
    setScrollPosition(window.scrollY);
    setSelectedInsight(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClose = () => {
    setSelectedInsight(null);
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f0eb] via-white to-[#f5f0eb] pt-20 md:pt-24 pb-12 md:pb-16">
      {/* Detail Modal */}
      {selectedInsight !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center overflow-y-auto pt-10 pb-10"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            className="bg-white rounded-3xl max-w-5xl w-full mx-4 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <FaTimes className="text-[#b8956a] text-xl" />
            </button>
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <h2 className="text-4xl font-light text-[#b8956a] mb-6 leading-tight">{insights[selectedInsight].title}</h2>
                <p className="text-[#8b7355] leading-relaxed text-lg">{insights[selectedInsight].content}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/book-appointment'}
                  className="mt-8 bg-gradient-to-r from-[#b8956a] to-[#8b7355] text-white px-8 py-3 rounded-full font-semibold cursor-pointer"
                >
                  Book Appointment
                </motion.button>
              </div>
              <div>
                <div className="rounded-3xl overflow-hidden shadow-xl sticky top-8">
                  <img
                    src={insights[selectedInsight].image}
                    alt={insights[selectedInsight].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a574] mb-4 text-sm font-bold tracking-widest uppercase">Dental Insights</p>
          <h1 className="text-5xl md:text-6xl font-light text-[#b8956a] mb-6">Expert Tips for a Healthier Smile</h1>
          <p className="text-[#8b7355] max-w-2xl mx-auto text-lg">
            Stay informed with the latest dental care tips, treatment insights, and oral health advice from our experts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              onClick={() => handleCardClick(index)}
              className="bg-white rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer group"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-[#b8956a] font-bold text-xl mb-4 leading-tight group-hover:text-[#8b7355] transition-colors">
                  {insight.title}
                </h3>
                <p className="text-[#8b7355] leading-relaxed mb-5">
                  {insight.excerpt}
                </p>
                <button className="text-[#d4a574] font-bold hover:text-[#b8956a] transition-colors flex items-center gap-2">
                  Read More <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DentalInsights;
