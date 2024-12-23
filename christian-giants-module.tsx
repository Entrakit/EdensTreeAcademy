import React, { useState } from 'react';
import { Scroll, BookOpen, ArrowRight, Play, CheckCircle, Lock, Brain, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ChristianGiantsModule = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const lessons = [
    {
      id: 1,
      title: "Augustine: The Bridge Between Two Worlds",
      duration: "60 minutes",
      content: {
        overview: "Explore how Augustine transformed classical philosophy into Christian wisdom.",
        keyPoints: [
          "Journey from classical philosophy to Christian revelation",
          "The nature of time and God's eternal presence",
          "Understanding evil as the absence of good",
          "Divine illumination and human knowledge"
        ],
        quotes: [
          {
            text: "Thou hast made us for thyself, O Lord, and our heart is restless until it finds its rest in thee.",
            source: "Augustine, Confessions"
          }
        ],
        keyWork: "Confessions",
        application: "Understanding how personal transformation leads to spiritual insight",
        reflection: "How does Augustine's journey from skepticism to faith mirror modern spiritual seeking?"
      },
      status: "available"
    },
    {
      id: 2,
      title: "Thomas Aquinas: Faith Meets Reason",
      duration: "55 minutes",
      content: {
        overview: "Examine how Aquinas harmonized faith and reason, creating a comprehensive Christian worldview.",
        keyPoints: [
          "The Five Ways to prove God's existence",
          "Natural law and divine law",
          "The relationship between faith and reason",
          "Understanding God's attributes through reason"
        ],
        quotes: [
          {
            text: "Grace does not destroy nature but perfects it.",
            source: "Thomas Aquinas, Summa Theologica"
          }
        ],
        keyWork: "Summa Theologica",
        application: "Integrating rational thinking with spiritual truth",
        reflection: "How can we use reason to deepen our faith while recognizing its limitations?"
      },
      status: "available"
    },
    {
      id: 3,
      title: "Blaise Pascal: The Heart's Reasons",
      duration: "50 minutes",
      content: {
        overview: "Discover Pascal's unique blend of mathematical genius and profound spiritual insight.",
        keyPoints: [
          "The heart's knowledge versus rational knowledge",
          "Pascal's Wager and rational faith",
          "The 'God-shaped vacuum' in human hearts",
          "Finding certainty in uncertainty"
        ],
        quotes: [
          {
            text: "The heart has its reasons which reason knows nothing of.",
            source: "Blaise Pascal, Pensées"
          }
        ],
        keyWork: "Pensées",
        application: "Balancing emotional and rational approaches to faith",
        reflection: "How do our hearts perceive truths that our minds cannot grasp?"
      },
      status: "available"
    },
    {
      id: 4,
      title: "C.S. Lewis: Imagination and Divine Truth",
      duration: "55 minutes",
      content: {
        overview: "Explore how Lewis used imagination and reason to illuminate Christian truth.",
        keyPoints: [
          "The role of imagination in understanding God",
          "Moral law as evidence for God",
          "Joy as a pointer to the divine",
          "Mythology and Christian truth"
        ],
        quotes: [
          {
            text: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.",
            source: "C.S. Lewis, The Weight of Glory"
          }
        ],
        keyWork: "Mere Christianity",
        application: "Using imagination to grasp spiritual realities",
        reflection: "How does imagination help us understand divine truth?"
      },
      status: "available"
    },
    {
      id: 5,
      title: "G.K. Chesterton: The Romance of Orthodoxy",
      duration: "50 minutes",
      content: {
        overview: "Discover Chesterton's defense of Christian truth through paradox and wonder.",
        keyPoints: [
          "The adventure of orthodoxy",
          "Paradox as a key to truth",
          "The sanity of faith",
          "Wonder as spiritual insight"
        ],
        quotes: [
          {
            text: "The real trouble with reality is that there is no background music.",
            source: "G.K. Chesterton, Orthodoxy"
          }
        ],
        keyWork: "Orthodoxy",
        application: "Finding wonder in traditional truth",
        reflection: "How does maintaining wonder deepen our spiritual understanding?"
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
            Giants of Christian Thought
          </h1>
          <p className="text-xl text-green-800 max-w-3xl mx-auto">
            Journey through the profound insights of history's greatest Christian thinkers, discovering how their understanding of faith and reason illuminates our own spiritual path.
          </p>
        </div>

        {/* Module Overview Card */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-4">
                <Brain className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-serif text-lg text-green-800">Deep Insight</h3>
                  <p className="text-green-600">Historical Wisdom</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <BookOpen className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-serif text-lg text-green-800">Key Texts</h3>
                  <p className="text-green-600">Original Sources</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Scroll className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-serif text-lg text-green-800">5 Thinkers</h3>
                  <p className="text-green-600">Detailed Study</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Star className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-serif text-lg text-green-800">Practical Application</h3>
                  <p className="text-green-600">Modern Context</p>
                </div>
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
                    <h4 className="font-serif text-lg text-green-800 mb-2">Key Work</h4>
                    <p className="text-green-700">{lesson.content.keyWork}</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-green-800 mb-2">Notable Quote</h4>
                    <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-700">
                      {lesson.content.quotes[0].text}
                      <footer className="mt-2 text-green-600">— {lesson.content.quotes[0].source}</footer>
                    </blockquote>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-green-800 mb-2">Modern Application</h4>
                    <p className="text-green-700">{lesson.content.application}</p>
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

export default ChristianGiantsModule;
