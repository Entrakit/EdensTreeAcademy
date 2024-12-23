import React, { useState, useEffect } from 'react';
import { 
  Leaf, BookOpen, Brain, Lightbulb, Compass, Church, Crown, Timer,
  Menu, X, ChevronRight, ChevronLeft, Home, Info, Users, MessageCircle, Mail,
  Play, CheckCircle, Lock, Star, Scroll
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Navigation Component
const Navigation = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen, handleNavigation }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'
  }`}>
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-700" />
          <span className="text-2xl font-serif text-green-800">Eden's Tree Academy</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { icon: <Home className="h-4 w-4" />, label: 'Home', id: 'home' },
            { icon: <Info className="h-4 w-4" />, label: 'About', id: 'about' },
            { icon: <BookOpen className="h-4 w-4" />, label: 'Courses', id: 'courses' },
            { icon: <MessageCircle className="h-4 w-4" />, label: 'Blog', id: 'blog' },
            { icon: <Users className="h-4 w-4" />, label: 'Community', id: 'community' },
            { icon: <Mail className="h-4 w-4" />, label: 'Contact', id: 'contact' }
          ].map(({ icon, label, id }) => (
            <button 
              key={label} 
              onClick={() => handleNavigation(id)}
              className="flex items-center space-x-1 text-green-800 hover:text-green-600 transition-colors"
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-green-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 shadow-lg py-4 px-4 space-y-4">
          {[
            { icon: <Home className="h-4 w-4" />, label: 'Home', id: 'home' },
            { icon: <Info className="h-4 w-4" />, label: 'About', id: 'about' },
            { icon: <BookOpen className="h-4 w-4" />, label: 'Courses', id: 'courses' },
            { icon: <MessageCircle className="h-4 w-4" />, label: 'Blog', id: 'blog' },
            { icon: <Users className="h-4 w-4" />, label: 'Community', id: 'community' },
            { icon: <Mail className="h-4 w-4" />, label: 'Contact', id: 'contact' }
          ].map(({ icon, label, id }) => (
            <button 
              key={label}
              onClick={() => {
                handleNavigation(id);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-2 w-full text-green-800 hover:text-green-600 transition-colors"
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  </nav>
);

// Footer Component
const Footer = () => (
  <footer className="bg-green-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="text-xl font-serif">Eden's Tree Academy</span>
          </div>
          <p className="text-green-200">
            Nurturing spiritual growth and understanding through divine wisdom.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-green-200">
            <li><button className="hover:text-white transition-colors">About Us</button></li>
            <li><button className="hover:text-white transition-colors">Courses</button></li>
            <li><button className="hover:text-white transition-colors">Blog</button></li>
            <li><button className="hover:text-white transition-colors">Contact</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-green-200">
            <li>Website: edenstreeacademy.com</li>
            <li>Location: Sikeston, MO 63801</li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-green-200">
            <li>© 2024 Eden's Tree Academy</li>
            <li>Owned and Operated by Entrakit LLC</li>
            <li>Sikeston, MO 63801</li>
            <li><button className="hover:text-white transition-colors">Privacy Policy</button></li>
            <li><button className="hover:text-white transition-colors">Terms of Service</button></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

// Placeholder Components (we'll replace these with actual components)
const HomePage = () => <div>Home Page Content</div>;
const AboutSection = () => <div>About Section Content</div>;
const CoursesPage = () => <div>Courses Page Content</div>;
const BlogSection = () => <div>Blog Section Content</div>;
const CommunitySection = () => <div>Community Section Content</div>;
const ContactSection = () => <div>Contact Section Content</div>;
const DivineFoundationsModule = () => <div>Divine Foundations Module Content</div>;
const ChristianGiantsModule = () => <div>Christian Giants Module Content</div>;

// Main App Component
const EdenTreeAcademy = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo(0, 0);
  };

  const getPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutSection />;
      case 'courses':
        return <CoursesPage />;
      case 'course-divine-foundations':
        return <DivineFoundationsModule />;
      case 'course-christian-giants':
        return <ChristianGiantsModule />;
      case 'blog':
        return <BlogSection />;
      case 'community':
        return <CommunitySection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation 
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        handleNavigation={handleNavigation}
      />
      <main className="flex-grow pt-16">
        {getPageContent()}
      </main>
      <Footer />
    </div>
  );
};

export default EdenTreeAcademy;
