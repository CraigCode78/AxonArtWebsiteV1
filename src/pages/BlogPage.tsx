import React from 'react'

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      title: "The Intersection of Art and Health: A New Paradigm",
      excerpt: "Explore how Axon is revolutionizing the way we visualize and interact with our health data through art.",
      date: "May 15, 2024",
      author: "Dr. Emily Chen",
      category: "Health & Technology"
    },
    {
      title: "Artist Spotlight: Meet the Creators Behind Axon's Unique Styles",
      excerpt: "Get to know the talented artists who are bringing your health data to life through their creative visions.",
      date: "May 10, 2024",
      author: "Sarah Thompson",
      category: "Artist Features"
    },
    {
      title: "Understanding Your Health Through Visual Patterns",
      excerpt: "Learn how to interpret the visual elements in your Axon-generated artwork to gain insights into your health trends.",
      date: "May 5, 2024",
      author: "Mark Johnson, Health Data Analyst",
      category: "Health Insights"
    }
  ]

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Blog & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.category}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">By {post.author}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Read More</a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogPage