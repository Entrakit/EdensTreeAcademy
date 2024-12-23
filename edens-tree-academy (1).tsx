import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { Leaf } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { Users } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Home } from 'lucide-react';
import { Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const CoursePreview = ({ course }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="mt-4 text-green-600 hover:text-green-500">
        Preview Course →
      </button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl text-green-800">{course.title}</DialogTitle>
      </DialogHeader>
      <div className="mt-4">
        <img src="/api/placeholder/400/225" alt="Course Preview" className="rounded-lg mb-4" />
        <p className="text-green-700 mb-4">{course.description}</p>
        <div className="space-y-2">
          <h4 className="font-semibold">What you'll learn:</h4>
          <ul className="list-disc pl-4 text-green-700">
            <li>Deep understanding of core principles</li>
            <li>Practical spiritual exercises</li>
            <li>Personal growth techniques</li>
            <li>Community integration practices</li>
          </ul>
        </div>
        <button className="w-full mt-6 bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
          Enroll Now
        </button>
      </div>
    </DialogContent>
  </Dialog>
);

const EdenTreeAcademy = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Our Vision",
      content: "Guiding souls on their spiritual journey through wisdom, understanding, and divine connection.",
      image: "/api/placeholder/800/600"
    },
    {
      title: "Our Approach",
      content: "Combining ancient wisdom with modern understanding to create transformative learning experiences.",
      image: "/api/placeholder/800/600"
    },
    {
      title: "Our Community",
      content: "Join a supportive network of seekers on the path to spiritual growth and enlightenment.",
      image: "/api/placeholder/800/600"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Navigation */}
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
                { icon: <Home className="h-4 w-4" />, label: 'Home' },
                { icon: <Info className="h-4 w-4" />, label: 'About' },
                { icon: <BookOpen className="h-4 w-4" />, label: 'Courses' },
                { icon: <MessageCircle className="h-4 w-4" />, label: 'Blog' },
                { icon: <Users className="h-4 w-4" />, label: 'Community' },
                { icon: <Mail className="h-4 w-4" />, label: 'Contact' }
              ].map(({ icon, label }) => (
                <button key={label} className="flex items-center space-x-1 text-green-800 hover:text-green-600 transition-colors">
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

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 shadow-lg py-4 px-4 space-y-4">
              {[
                { icon: <Home className="h-4 w-4" />, label: 'Home' },
                { icon: <Info className="h-4 w-4" />, label: 'About' },
                { icon: <BookOpen className="h-4 w-4" />, label: 'Courses' },
                { icon: <MessageCircle className="h-4 w-4" />, label: 'Blog' },
                { icon: <Users className="h-4 w-4" />, label: 'Community' },
                { icon: <Mail className="h-4 w-4" />, label: 'Contact' }
              ].map(({ icon, label }) => (
                <button 
                  key={label} 
                  className="flex items-center space-x-2 w-full text-green-800 hover:text-green-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-6xl text-green-900 mb-6">
            Rooted in Wisdom, Growing Toward the Divine
          </h1>
          <p className="text-xl text-green-800 mb-8 max-w-2xl mx-auto">
            Embark on a transformative journey of spiritual growth, metaphysical understanding, and personal development.
          </p>
          <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors text-lg">
            Begin Your Journey
          </button>
        </div>
      </div>

      {/* Slider Section */}
      <section className="py-16 bg-white/60">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-96">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
                  <div className="text-center p-8">
                    <h2 className="font-serif text-4xl mb-4">{slides[currentSlide].title}</h2>
                    <p className="text-lg max-w-2xl">{slides[currentSlide].content}</p>
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-green-800" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-green-800" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-green-200">
                <li>Email: contact@edenstree.academy</li>
                <li>Phone: (555) 123-4567</li>
                <li>Location: San Francisco, CA</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-green-200">
                <li>© 2024 Eden's Tree Academy</li>
                <li>Created by Entrakit LLC</li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EdenTreeAcademy;
