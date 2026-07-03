import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
         
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-6 text-left md:text-center">
            We Are Always Ready to Help<br />You and Answer Your Questions
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="bg-[var(--bg-light)] rounded-2xl p-6 shadow-lg border-2 border-[var(--border)]">
              <div className="flex items-center gap-4 mb-2">
                <FaClock className="text-[#AA7747] text-2xl" />
                <h3 className="text-lg font-bold text-[var(--secondary)]">We're Open</h3>
              </div>
              <p className="text-gray-700 text-sm ml-10">Monday – Saturday: 09.00 am – 8.30 pm</p>
              
              <p className="text-gray-700 text-sm ml-10">Sunday: 09.00 am – 01.00 mm</p>
              
            </div>

            <div className="bg-[var(--bg-light)] rounded-2xl p-6 shadow-lg border-2 border-[var(--border)]">
              <div className="flex items-center gap-4 mb-2">
                <FaPhoneAlt className="text-[#AA7747] text-2xl" />
                <h3 className="text-lg font-bold text-[var(--secondary)]">Call Us Directly</h3>
              </div>
              <a href="tel:+919344310422" className="block hover:text-[#AA7747] font-medium text-gray-700 text-sm ml-10">+91-9344310422</a>
            </div>

            <div className="bg-[var(--bg-light)] rounded-2xl p-6 shadow-lg border-2 border-[var(--border)]">
              <div className="flex items-center gap-4 mb-2">
                <FaMapMarkerAlt className="text-[#AA7747] text-2xl" />
                <h3 className="text-lg font-bold text-[var(--secondary)]">Location</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm ml-10">
                First Floor, Latha Rajagopalan Hospital, Old Bypass Road, Paramathi Velur, Namakkal – 638182,<br />
                Tamil Nadu, India.
              </p>
            </div>

            <div className="bg-[var(--bg-light)] rounded-2xl p-6 shadow-lg border-2 border-[var(--border)]">
              <div className="flex items-center gap-4 mb-2">
                <FaEnvelope className="text-[#AA7747] text-2xl" />
                <h3 className="text-lg font-bold text-[var(--secondary)]">Send a Message</h3>
              </div>
              <a href="mailto:dentalclip01@gmail.com" className="text-gray-700 hover:text-[#AA7747] break-all font-medium text-sm ml-10">
                dentalclip01@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-[var(--border)]">
              <h2 className="text-3xl font-bold text-[var(--secondary)] mb-4">Get In Touch</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At <span className="font-semibold text-[#AA7747]">Dental Clip. Dental Clinic</span>, your comfort and convenience come first. Whether you have a question about a specific treatment, a suggestion for our team, or you are ready to book your consultation, we are here for you.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Simply fill out the form below with your details, and our patient coordinator will get back to you shortly. For immediate assistance or to schedule an <span className="font-semibold text-[#AA7747]">emergency dental appointment in Paramathi Velur</span>, feel free to call us directly.
              </p>

              <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const message = formData.get('message');

                const whatsappMessage = `Hello Dental Clip. Dental clinic i would like to book an appointment\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'N/A'}${message ? `\n*Message:* ${message}` : ''}`;
                
                window.dispatchEvent(new CustomEvent('openWhatsAppQR', {
                  detail: { message: whatsappMessage }
                }));
              }}>
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your Phone"
                  className="w-full px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-5 py-4 bg-white border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--primary)] text-black placeholder-gray-400 resize-none transition-colors"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[var(--primary)] text-white py-4 rounded-xl font-bold text-lg hover:bg-[var(--primary-hover)] transition-colors cursor-pointer"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
