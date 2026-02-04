import { Link } from "react-router-dom";
import { FaTrophy, FaDiscord, FaTwitter, FaTwitch, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-base-100 via-base-200 to-base-100 border-t border-primary/30 text-base-content">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4 ">
            <div className="flex items-center gap-2 mb-4 bitcount-single">
              <img src="/images/logo.png" alt="GamersIntel Logo" className="w-10 h-10"/>
              <span className="text-primary text-2xl font-extrabold">Gamers</span><span className="text-secondary text-2xl font-extrabold">Intel</span>
                      <HiLightningBolt className="text-secondary text-xl animate-pulse hidden sm:block" />
            </div>
            <p className="text-base-content/60  leading-relaxed">
              Track, manage, and remember your gaming journey. Intel for games  your personal gaming memory system.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <FaTrophy className="text-2xl" />
              <span className="font-bold">Remember Every Game</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <HiLightningBolt className="text-primary" /> Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <Link to="#how-it-works" className="hover:text-primary transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-primary transition-colors duration-300">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-black text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <HiLightningBolt className="text-primary" /> Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-secondary transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-secondary transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-black text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <HiLightningBolt className="text-primary" /> Connect
            </h4>
            <div className="space-y-3 mb-6">
              <p className="flex items-center gap-2 text-base-content/60">
                <FaEnvelope className="text-primary" />
                <a href="mailto:support@gamersintel.com" className="hover:text-primary transition-colors">
                  support@gamersintel.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-base-content/60">
                <FaMapMarkerAlt className="text-primary" />
                For Gamers, By Gamers
              </p>
            </div>
            
            <h5 className="text-sm font-bold text-primary uppercase mb-3">Join Our Community</h5>
            <div className="flex gap-3">
              <a href="https://discord.gg/gamersintel" target="_blank" rel="noopener noreferrer" 
                className="btn btn-circle btn-primary border-0 transition-all duration-300 hover:scale-110">
                <FaDiscord size={20} />
              </a>
              <a href="https://twitter.com/gamersintel" target="_blank" rel="noopener noreferrer" 
                className="btn btn-circle btn-primary border-0 transition-all duration-300 hover:scale-110">
                <FaTwitter size={20} />
              </a>
              <a href="https://twitch.tv/gamersintel" target="_blank" rel="noopener noreferrer" 
                className="btn btn-circle btn-primary border-0 transition-all duration-300 hover:scale-110">
                <FaTwitch size={20} />
              </a>
              <a href="https://youtube.com/@gamersintel" target="_blank" rel="noopener noreferrer" 
                className="btn btn-circle btn-primary border-0 transition-all duration-300 hover:scale-110">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/30 bg-base-100">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base-content/60 text-sm">
              © {new Date().getFullYear()} <span className="text-primary font-bold">GamersIntel</span>. All rights reserved. Your gaming memory system.
            </p>
            <div className="flex items-center gap-2 text-sm text-base-content/60">
              <span>Built for gamers who love to</span>
              <span className="text-primary font-semibold">remember</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
