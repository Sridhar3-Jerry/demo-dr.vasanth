import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube, FaArrowUp, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[var(--secondary)] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1 order-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/dental clip logo.png" alt="Dental Clip Logo" className="w-12 h-12 object-contain" />
              <div>
                <div className="text-white font-bold text-xl">DENTAL CLIP</div>
                <div className="text-[var(--primary)] text-xs tracking-wider font-medium">DENTAL CLINIC</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              The destination for creating a beautiful smile.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center text-white hover:bg-opacity-80 transition-all">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center text-white hover:bg-opacity-80 transition-all">
                <FaWhatsapp className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center text-white hover:bg-opacity-80 transition-all">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center text-white hover:bg-opacity-80 transition-all">
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="order-2">
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">About Us</a></li>
              <li><a href="/treatment/braces" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Treatments</a></li>
              <li><a href="/team" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Our Team</a></li>
              <li><a href="/gallery" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="order-3">
            <h3 className="text-white font-bold text-lg mb-6">Our Treatments</h3>
            <ul className="space-y-3">
              <li><a href="/treatment/braces" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Braces & Orthodontics</a></li>
              <li><a href="/treatment/dental-implants" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Dental Implants</a></li>
              <li><a href="/treatment/cosmetic-dentistry" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="/treatment/root-canal-treatment" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Root Canal</a></li>
              <li><a href="/treatment/laser-dentistry" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Laser Dentistry</a></li>
              <li><a href="/treatment/child-dentistry" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Child Dentistry</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="order-4">
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[var(--primary)] text-lg mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    First Floor, Latha Rajagopalan Hospital,<br />
                    Old Bypass Road, Paramathi Velur,<br />
                    Namakkal – 638182, Tamil Nadu
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[var(--primary)] text-lg flex-shrink-0" />
                <a href="tel:+919344310422" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">+91-9344310422</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[var(--primary)] text-lg flex-shrink-0" />
                <a href="mailto:dentalclip.dentalclinic@gmail.com" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors break-all">
                  dentalclip.dentalclinic@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-[var(--primary)] text-lg flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Mon – Sat: 9:00 AM – 8:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">© 2026 Dental Clip. Dental Clinic. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 text-sm hover:text-[var(--primary)] transition-colors">Terms of Service</a>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white hover:bg-opacity-80 transition-all"
            >
              <FaArrowUp className="text-sm" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
