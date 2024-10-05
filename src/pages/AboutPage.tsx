import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Axon</h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600">
            Where Personal Wellness Meets Artistic Expression Through AI
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            At Axon, we're revolutionizing the way people perceive and interact with their health data. 
            Our mission is to transform the often mundane world of personal health metrics into a 
            captivating visual journey, merging the realms of wellness and art through cutting-edge AI technology.
          </p>
          <h4 className="text-xl font-semibold mb-4 text-gray-800">Our Story</h4>
          <p className="text-lg text-gray-700 mb-8">
            Axon was born from a simple yet powerful idea: what if we could see our health progress as 
            a beautiful, ever-evolving piece of art? Our founders, a team of health enthusiasts, artists, 
            and AI experts, came together to create a platform that not only motivates individuals to 
            improve their health but also celebrates that journey through unique, personalized artworks.
          </p>
          <p className="text-lg text-gray-700">
            Today, Axon stands at the forefront of the digital health revolution, offering a unique 
            blend of technology and creativity that inspires users to take control of their wellness 
            journey while fostering a global community of health-conscious art lovers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage