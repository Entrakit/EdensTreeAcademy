import React, { useState } from 'react';
import { Scroll, BookOpen, ArrowRight, Play, CheckCircle, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const LessonModule = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: 1,
      title: "The Divine Pattern: Understanding God's Reset",
      duration: "45 minutes",
      content: {
        overview: "Explore the profound significance of the Great Flood as God's reset mechanism for humanity.",
        keyPoints: [
          "The state of humanity before the flood - corruption and violence",
          "Noah's righteousness in a fallen world",
          "God's purpose in preservation - the ark as sanctuary",
          "The covenant after the flood - God's promise to creation"
        ],
        quotes: [
          {
            text: "But Noah found grace in the eyes of the LORD.",
            source: "Genesis 6:8"
          }
        ],
        reflection: "How does God's decision to preserve Noah's family demonstrate both divine justice and mercy?"
      },
      status: "available"
    },
    {
      id: 2,
      title: "Divine Selection: The Principle of Remnant",
      duration: "50 minutes",
      content: {
        overview: "Examine God's pattern of preserving a faithful remnant throughout history.",
        keyPoints: [
          "The concept of divine selection - choosing the faithful few",
          "Historical examples of God's remnant",
          "The responsibility of being chosen",
          "Modern implications of the remnant principle"
        ],
        quotes: [
          {
            text: "So too at the present time there is a remnant, chosen by grace.",
            source: "Romans 11:5"
          }
        ],
        reflection: "What characteristics define those who God preserves as His remnant?"
      },
      status: "available"
    },
    {
      id: 3,
      title: "The Purpose of Divine Intervention",
      duration: "55 minutes",
      content: {
        overview: "Understanding why and how God intervenes in human history.",
        keyPoints: [
          "Patterns of divine intervention throughout history",
          "The balance of divine sovereignty and human free will",
          "God's ultimate purpose in intervention",
          "Recognizing divine intervention in our time"
        ],
        quotes: [
          {
            text: "For my thoughts are not your thoughts, neither are your ways my ways, declares the LORD.",
            source: "Isaiah 55:8"
          }
        ],
        reflection: "How does understanding God's pattern of intervention shape our view of current events?"
      },
      status: "available"
    },
    {
      id: 4,
      title: "Augustine's City of God: Divine vs. Earthly Kingdoms",
      duration: "60 minutes",
      content: {
        overview: "Exploring Augustine's profound insights on the contrast between earthly and divine governance.",
        keyPoints: [
          "The concept of two cities - earthly and heavenly",
          "Pride as the foundation of earthly kingdoms",
          "Love as the foundation of God's kingdom",
          "Historical cycles of rise and fall"
        ],
        quotes: [
          {
            text: "Two loves have built two cities: the love of self to the contempt of God has built the earthly city; the love of God to the contempt of self has built the heavenly city.",
            source: "Augustine, City of God"
          }
        ],
        reflection: "How do we balance living in the earthly city while citizens of the heavenly city?"
      },
      status: "available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* Module Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl text-green-900 mb-6">
            Foundations of Divine Thought
          </h1>
          <p className="text-xl text-green-800 max-w-3xl mx-auto">
            Understanding God's patterns of interaction with humanity and His divine purpose through historical events and philosophical insight.
          </p>
        </div>

        {/* Module Progress */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <BookOpen className="h-8 w-8 text-green-600" />
                <div>
                  <h2 className="font-serif text-2xl text-green-800">Module Progress</h2>
                  <p className="text-green-600">4 out of 19 lessons completed</p>
                </div>
              </div>
              <div className="w-48 h-2 bg-green-100 rounded-full">
                <div className="w-1/4 h-full bg-green-600 rounded-full" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lesson List */}
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Dialog key={lesson.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {lesson.status === 'completed' ? (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        ) : lesson.status === 'available' ? (
                          <Play className="h-6 w-6 text-green-600" />
                        ) : (
                          <Lock className="h-6 w-6 text-gray-400" />
                        )}
                        <div>
                          <h3 className="font-serif text-xl text-green-800">{lesson.title}</h3>
                          <p className="text-green-600">{lesson.duration}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-green-800 mb-4">
                    {lesson.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="font-serif text-lg text-green-800 mb-2">Overview</h4>
                    <p className="text-green-700">{lesson.content.overview}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-green-800 mb-2">Key Points</h4>
                    <ul className="space-y-2">
                      {lesson.content.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-center space-x-2 text-green-700">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-green-800 mb-2">Key Quote</h4>
                    <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-700">
                      {lesson.content.quotes[0].text}
                      <footer className="mt-2 text-green-600">— {lesson.content.quotes[0].source}</footer>
                    </blockquote>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-green-800 mb-2">Reflection Question</h4>
                    <p className="text-green-700">{lesson.content.reflection}</p>
                  </div>
                  <button className="w-full bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                    Begin Lesson
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button className="text-green-600 hover:text-green-500 flex items-center space-x-2">
            <ArrowRight className="h-5 w-5 transform rotate-180" />
            <span>Previous Module</span>
          </button>
          <button className="text-green-600 hover:text-green-500 flex items-center space-x-2">
            <span>Next Module</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonModule;
