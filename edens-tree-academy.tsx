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

// [Previous component code remains exactly the same until the footer section]

const EdenTreeAcademy = () => {
  // [Previous state and helper functions remain the same]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* [Previous sections remain the same until footer] */}

      {/* Updated Footer */}
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
