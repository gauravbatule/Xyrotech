import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, Check, ArrowRight, Star, Code, Layout, Smartphone, Database, Globe } from 'lucide-react';

const navLinks = [
  { title: 'Home', href: '#' },
  { title: 'Services', href: '#services' },
  { title: 'Expertise', href: '#expertise' },
  { title: 'About', href: '#about' },
  { title: 'Contact', href: '#contact' }
];

const services = [
  {
    title: 'Website Development',
    description: 'Professional website development services to help you create a website that meets your business goals.',
    icon: <Layout className="w-8 h-8" />,
    color: 'from-emerald-500 to-teal-400'
  },
  {
    title: 'Content Writing',
    description: 'Comprehensive content writing service to help you create compelling, engaging and SEO-friendly content.',
    icon: <Star className="w-8 h-8" />,
    color: 'from-violet-500 to-purple-400'
  },
  {
    title: 'E-commerce Development',
    description: 'Complete solutions for businesses to create, manage, and grow their online store.',
    icon: <Globe className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Custom Software',
    description: 'Tailored software solutions to meet specific business needs with secure and efficient applications.',
    icon: <Code className="w-8 h-8" />,
    color: 'from-orange-500 to-amber-400'
  },
  {
    title: 'Mobile App Development',
    description: 'Comprehensive mobile app development service to create, customize and deploy your mobile app.',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'from-pink-500 to-rose-400'
  },
  {
    title: 'Digital Marketing',
    description: 'Promote businesses online through creative strategies to reach new customers and increase profits.',
    icon: <Database className="w-8 h-8" />,
    color: 'from-red-500 to-orange-400'
  }
];

const techStack = {
  Mobile: ['iOS', 'Android', 'React Native', 'Flutter', 'Ionic', 'Swift'],
  Website: ['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'Vue', 'TypeScript'],
  Backend: ['.NET', 'PHP', 'Java', 'Node.js', 'Python'],
  Database: ['MySQL', 'MSSQL', 'Firebase', 'Oracle', 'MongoDB'],
  'CMS & CRM': ['WordPress', 'Shopify', 'Drupal', 'Magento']
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Mobile');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                XyroTech
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-gray-700 hover:text-violet-600 transition-colors font-medium"
                >
                  {link.title}
                </a>
              ))}
            </div>
            
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-violet-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-lg border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your <span className="text-teal-300">Digital Vision</span> Into Reality
              </h1>
              <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                Partner with XyroTech Solutions to bring your innovative ideas to life. We deliver cutting-edge IT solutions that drive business growth.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-violet-600 rounded-lg font-medium hover:bg-violet-50 transition-all hover:scale-105 transform shadow-lg"
                >
                  Get Started <ArrowRight className="ml-2" size={20} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/api/placeholder/600/400"
                alt="Hero"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Elevate your business with our comprehensive range of digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} p-4 mb-6 text-white transform group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center mt-4 text-violet-600 hover:text-violet-700 font-medium"
                >
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="expertise" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Stay ahead with our expertise in cutting-edge technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(techStack).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === category
                    ? 'bg-violet-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-violet-50 hover:text-violet-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack[activeTab].map((tech) => (
              <div
                key={tech}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 transform"
              >
                <img
                  src="/api/placeholder/64/64"
                  alt={tech}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg"
                />
                <span className="block text-center font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
     
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/api/placeholder/600/400"
                alt="Contact"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Get a FREE Quotation
                </h2>
                <p className="text-gray-600 mb-8">Transform your ideas into reality with us.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    required
                  />
                  
                  <label className="flex items-center space-x-3 text-gray-600">
                    <input 
                      type="checkbox" 
                      className="form-checkbox text-violet-600 rounded border-gray-300 focus:ring-violet-500" 
                      required 
                    />
                    <span>Receive notifications on WhatsApp and Email</span>
                  </label>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-lg font-medium hover:opacity-90 transition-opacity transform hover:scale-[1.02]"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
 </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
            {/* Company Info */}
            <div className="space-y-6">
              <span className="text-2xl font-bold">XyroTech</span>
              <p className="text-gray-200 leading-relaxed">
                Transforming businesses through innovative digital solutions and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <img
                      src="/api/placeholder/24/24"
                      alt={social}
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {['About Us', 'Services', 'Portfolio', 'Careers', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-200 hover:text-white transition-colors flex items-center"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-4">
                {services.slice(0, 5).map((service) => (
                  <li key={service.title}>
                    <a
                      href={`#${service.title.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-200 hover:text-white transition-colors flex items-center"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <img
                    src="/api/placeholder/24/24"
                    alt="location"
                    className="w-6 h-6 mt-1"
                  />
                  <span className="text-gray-200">
                    123 Business Avenue, Tech City, TC 12345
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="/api/placeholder/24/24"
                    alt="phone"
                    className="w-6 h-6"
                  />
                  <span className="text-gray-200">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="/api/placeholder/24/24"
                    alt="email"
                    className="w-6 h-6"
                  />
                  <span className="text-gray-200">info@xyrotech.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-200">
                © {new Date().getFullYear()} XyroTech. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#privacy" className="text-gray-200 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-200 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-gray-200 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

export default App;
