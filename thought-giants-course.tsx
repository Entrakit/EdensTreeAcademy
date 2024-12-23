import React, { useState } from 'react';
import { ScrollText, Book, Brain, Lightbulb, Compass, Church, Crown, Timer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const CourseModule = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      title: "Foundations of Divine Thought",
      duration: "4 weeks",
      lessons: [
        "The Great Flood: God's Reset and Divine Purpose",
        "Understanding Our Role as God's Creation",
        "The Nature of Divine Communication",
        "Patterns of Divine Intervention in Human History"
      ],
      description: "Explore how God's fundamental patterns of interaction with humanity, from the Great Flood to present day, reveal His divine purpose and eternal love. Understand how these historical events model God's continuing work in our world.",
      keyThinkers: ["Augustine", "Aquinas", "Pascal"],
      icon: <Crown className="h-6 w-6 text-green-600" />
    },
    {
      title: "Giants of Christian Thought",
      duration: "6 weeks",
      lessons: [
        "Early Christian Philosophers and Divine Wisdom",
        "Medieval Masters of Spiritual Understanding",
        "Reformation Thinkers and Divine Truth",
        "Enlightenment Era Christians and Rational Faith",
        "Modern Christian Philosophers and Contemporary Challenges"
      ],
      description: "Study the profound insights of history's greatest Christian thinkers, examining how their faith informed their philosophical understanding and how they reconciled reason with revelation.",
      keyThinkers: ["C.S. Lewis", "G.K. Chesterton", "Kierkegaard"],
      icon: <Brain className="h-6 w-6 text-green-600" />
    },
    {
      title: "Divine Energy and Spiritual Connection",
      duration: "4 weeks",
      lessons: [
        "Understanding Spiritual Discernment",
        "The Nature of Divine Communication",
        "Recognizing God's Voice in Thought",
        "Cultivating Spiritual Sensitivity"
      ],
      description: "Learn how historical Christian thinkers experienced and understood divine communication, and develop your own capacity for spiritual discernment and divine connection.",
      keyThinkers: ["Jonathan Edwards", "Brother Lawrence", "A.W. Tozer"],
      icon: <Lightbulb className="h-6 w-6 text-green-600" />
    },
    {
      title: "Prophetic Understanding and Divine Purpose",
      duration: "5 weeks",
      lessons: [
        "Biblical Patterns of Prophecy and Purpose",
        "Understanding God's Timeframes",
        "Cities of Man vs. City of God",
        "Pride and the Cycle of Civilizations",
        "Divine Purpose in Human History"
      ],
      description: "Examine how God's prophetic patterns reveal His purposes, and understand the cycle of human pride and divine intervention in the rise and fall of civilizations.",
      keyThinkers: ["Augustine", "Daniel", "Jeremiah"],
      icon: <Compass className="h-6 w-6 text-green-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* Course Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl text-green-900 mb-6">
            Giants of Spiritual Thought: Past, Present & Divine Purpose
          </h1>
          <p className="text-xl text-green-800 max-w-3xl mx-auto">
            Journey through the profound wisdom of history's greatest spiritual thinkers, understanding their divine connection and applying their insights to contemporary spiritual growth.
          </p>
        </div>

        {/* Course Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <Book className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-serif text-lg text-green-800">19 Lessons</h3>
                <p className="text-green-600">Comprehensive Learning</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <Timer className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-serif text-lg text-green-800">19 Weeks</h3>
                <p className="text-green-600">In-Depth Study</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <ScrollText className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-serif text-lg text-green-800">4 Modules</h3>
                <p className="text-green-600">Structured Learning</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <Church className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-serif text-lg text-green-800">12 Thinkers</h3>
                <p className="text-green-600">Historical Wisdom</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <Dialog key={module.title}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      {module.icon}
                      <div>
                        <CardTitle className="font-serif text-2xl text-green-800">{module.title}</CardTitle>
                        <p className="text-green-600">{module.duration}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 mb-4">{module.description}</p>
                    <button className="text-green-600 hover:text-green-500">
                      View Module Details →
                    </button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-green-800">{module.title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <h4 className="font-serif text-lg text-green-800 mb-2">Module Lessons:</h4>
                  <ul className="space-y-2 text-green-700">
                    {module.lessons.map((lesson) => (
                      <li key={lesson} className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 className="font-serif text-lg text-green-800 mt-4 mb-2">Key Thinkers:</h4>
                  <div className="flex flex-wrap gap-2">
                    {module.keyThinkers.map((thinker) => (
                      <span key={thinker} className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                        {thinker}
                      </span>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Course Call to Action */}
        <div className="text-center mt-16">
          <h2 className="font-serif text-3xl text-green-900 mb-6">
            Begin Your Journey Through Divine Wisdom
          </h2>
          <p className="text-lg text-green-800 mb-8 max-w-2xl mx-auto">
            Explore the profound insights of history's greatest spiritual thinkers and discover how their understanding can deepen your own divine connection.
          </p>
          <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors text-lg">
            Enroll in Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModule;
