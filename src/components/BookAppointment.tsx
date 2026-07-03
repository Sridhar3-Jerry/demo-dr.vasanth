import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';
import dentalRoom from '../assets/dental room.png';
import { treatmentData } from '../data/treatments';

const BookAppointment = () => {
  const services = treatmentData.map(t => t.title);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left md:text-center mb-12"
        >
          <p className="text-[#AA7747] text-sm font-bold tracking-widest uppercase text-center mt-6">Schedule Your Visit</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mt-4 mb-6 text-left md:text-center">Book Your Appointment</h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Book your appointment today for expert dental care tailored to your needs. Healthy, beautiful smiles start with a simple step, schedule now!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const service = formData.get('service');
              const date = formData.get('date');
              const time = formData.get('time');
              const name = formData.get('name');
              const email = formData.get('email');
              const phone = formData.get('phone');
              const message = formData.get('message');

              const whatsappMessage = `Hello Dental Clip. Dental clinic i would like to book an appointment\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email || 'N/A'}\n*Service:* ${service}\n*Date:* ${date}\n*Time:* ${time}${message ? `\n*Message:* ${message}` : ''}`;

              window.dispatchEvent(new CustomEvent('openWhatsAppQR', {
                detail: { message: whatsappMessage }
              }));
            }}>
              <div>
                <label className="block text-[var(--secondary)] font-bold mb-2">Select Service</label>
                <select name="service" required className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors">
                  <option value="">Select service</option>
                  {services.map((service, i) => (
                    <option key={i} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--secondary)] font-bold mb-2">Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[var(--secondary)] font-bold mb-2">Time</label>
                  <select name="time" required className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors">
                    <option value="">Select Time</option>
                    {timeSlots.map((time, i) => (
                      <option key={i} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[var(--secondary)] font-bold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[var(--secondary)] font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[var(--secondary)] font-bold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your phone"
                    className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--secondary)] font-bold mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Any special requirements or concerns..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-[var(--border)] focus:border-[var(--primary)] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[var(--primary)] text-white py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Send Appointment Request
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[500px]">
              <img src={dentalRoom} alt="Dental Care" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <FaClock className="text-[#AA7747] text-2xl" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-2xl mb-1">Opening Hours</p>
                    <p className="text-white/90">Monday - Saturday: 09:00 AM - 08:30 PM</p>
                    <p className='text-white/90'>Sunday: 09:00 AM - 01:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl text-center"
              >
                <div className="text-4xl font-bold text-[#AA7747] mb-2">8,000+</div>
                <p className="text-gray-700">Happy Patients</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl text-center"
              >
                <div className="text-4xl font-bold text-[#AA7747] mb-2">4.7</div>
                <p className="text-gray-700">Google Rating</p>
              </motion.div>
            </div>

            <div className="bg-[var(--bg-light)] rounded-3xl p-8 border-2 border-[var(--border)]">
              <h3 className="text-2xl font-bold mb-4 text-[var(--secondary)]">Why Choose Us?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-[#AA7747]">✓</span>
                  <span>Expert team with 25+ years experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-[#AA7747]">✓</span>
                  <span>State-of-the-art equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-[#AA7747]">✓</span>
                  <span>Painless and comfortable procedures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl text-[#AA7747]">✓</span>
                  <span>Flexible appointment scheduling</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
