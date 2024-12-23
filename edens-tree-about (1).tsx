import React from 'react';
import { Leaf, Heart, Star, Users, Book, Compass } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Divine Connection",
      description: "We foster meaningful relationships between individuals and their spiritual journey, creating space for deep, personal growth."
    },
    {
      icon: <Star className="h-8 w-8 text-green-600" />,
      title: "Wisdom Traditions",
      description: "Our teachings blend ancient spiritual wisdom with contemporary understanding, honoring both timeless truth and modern insight."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community Growth",
      description: "We believe in the power of collective spiritual development, supporting each other on our paths to enlightenment."
    },
    {
      icon: <Book className="h-8 w-8 text-green-600" />,
      title: "Educational Excellence",
      description: "Our curriculum is carefully crafted to provide deep, transformative learning experiences that nurture both mind and spirit."
    },
    {
      icon: <Compass className="h-8 w-8 text-green-600" />,
      title: "Guided Development",
      description: "We provide direction and support while honoring each individual's unique spiritual journey and personal pace."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Natural Growth",
      description: "Like a tree reaching toward the light, we encourage organic spiritual development rooted in authentic experience."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-green-900 text-white">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20" />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl mb-6">About Eden's Tree Academy</h1>
          <p className="text-xl max-w-3xl mx-auto text-green-100">
            A sanctuary of spiritual growth and divine wisdom, nurturing souls on their journey to enlightenment.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-green-900 mb-8">Our Mission</h2>
            <p className="text-xl text-green-800 leading-relaxed">
              Eden's Tree Academy is dedicated to fostering spiritual growth and understanding through a unique blend of ancient wisdom and modern insight. We create an environment where seekers can explore their divine connection, develop deep spiritual understanding, and grow in community with fellow travelers on the path.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white/60">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-green-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-green-100 rounded-full">
                      {value.icon}
                    </div>
                    <h3 className="font-serif text-2xl text-green-800 mb-3">{value.title}</h3>
                    <p className="text-green-700">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-green-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl text-green-900 text-center mb-12">Our Journey</h2>
            <div className="prose prose-lg max-w-none text-green-800">
              <p className="mb-6">
                Founded by Entrakit LLC in Sikeston, Missouri, Eden's Tree Academy emerged from a vision to create a space where spiritual seekers could find guidance, community, and deep understanding. Our name reflects the timeless symbolism of the tree - rooted in wisdom while constantly growing toward divine light.
              </p>
              <p className="mb-6">
                We believe that every individual's spiritual journey is unique and sacred. Our academy provides the fertile soil where your spiritual understanding can take root and flourish, supported by experienced guides and a community of fellow seekers.
              </p>
              <p>
                Through our carefully curated courses, workshops, and community events, we create opportunities for meaningful spiritual growth and transformation. Whether you're beginning your spiritual journey or seeking to deepen your existing practice, Eden's Tree Academy offers the guidance and support you need to grow toward your highest potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl mb-6">Begin Your Journey With Us</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our community of spiritual seekers and embark on a transformative journey of growth and understanding.
          </p>
          <button className="bg-white text-green-900 px-8 py-3 rounded-full hover:bg-green-100 transition-colors text-lg">
            Explore Our Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
