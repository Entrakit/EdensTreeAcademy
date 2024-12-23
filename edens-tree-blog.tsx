import React from 'react';
import { ChevronRight, Calendar, Clock, Tag, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Understanding Telesis: Divine Purpose in Human Development",
      date: "December 13, 2024",
      category: "Spirituality",
      readTime: "7 min read",
      excerpt: "Delve into the profound concept of Telesis - the intelligent direction of effort toward the achievement of divine purpose in human development and spiritual growth.",
      content: `In the vast landscape of spiritual understanding, few concepts hold as much transformative potential as Telesis. This divine principle of purposeful development guides us toward our highest calling and deepest fulfillment.

Through careful examination, we discover that Telesis represents more than mere progress—it embodies the conscious alignment with God's divine plan for human development. This purposeful direction of effort transcends simple goal-setting or personal achievement, reaching into the realm of divine cooperation.

Key aspects of Telesis include:
- Recognition of divine purpose in personal growth
- Alignment with God's developmental plan
- Conscious cooperation with spiritual principles
- Integration of wisdom in daily practice`,
      author: "Dr. Sarah Matthews",
      tags: ["Divine Purpose", "Spiritual Growth", "Wisdom"]
    },
    {
      title: "The Metaphysical Foundation of Christian Thought",
      date: "December 11, 2024",
      category: "Philosophy",
      readTime: "8 min read",
      excerpt: "Explore the deep metaphysical foundations that underpin Christian thought and how they shape our understanding of reality and divine truth.",
      content: "Coming soon...",
      author: "Prof. Michael Anderson",
      tags: ["Metaphysics", "Christianity", "Philosophy"]
    },
    {
      title: "Divine Patterns in Human History",
      date: "December 8, 2024",
      category: "Spiritual History",
      readTime: "6 min read",
      excerpt: "Uncover the recurring patterns of divine intervention throughout human history and their significance for our spiritual journey today.",
      content: "Coming soon...",
      author: "Rev. Dr. James Wilson",
      tags: ["History", "Divine Intervention", "Patterns"]
    },
    {
      title: "The Role of Contemplation in Modern Spirituality",
      date: "December 5, 2024",
      category: "Practice",
      readTime: "5 min read",
      excerpt: "Discover how ancient contemplative practices can enrich and deepen your spiritual life in today's fast-paced world.",
      content: "Coming soon...",
      author: "Sister Mary Grace",
      tags: ["Contemplation", "Modern Life", "Practice"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl text-green-900 mb-6">
            Insights & Wisdom
          </h1>
          <p className="text-xl text-green-800 max-w-3xl mx-auto">
            Explore deep spiritual truths, philosophical insights, and practical wisdom for your journey of growth and understanding.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="flex items-center text-sm text-green-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center text-sm text-green-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center text-sm text-green-700 bg-green-100 px-2 py-1 rounded-full">
                    <Tag className="h-4 w-4 mr-1" />
                    {post.category}
                  </span>
                </div>
                
                <h2 className="font-serif text-2xl text-green-800 mb-3">
                  {post.title}
                </h2>
                
                <p className="text-green-700 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm text-green-600">By {post.author}</span>
                  <button className="text-green-600 hover:text-green-500 flex items-center space-x-1">
                    <span>Read More</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
