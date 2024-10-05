import React from 'react'

const ForArtistsPage: React.FC = () => {
  return (
    <section id="for-artists" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">For Artists</h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600">
            Join Our Creative Community
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Axon offers a unique opportunity for artists to showcase their talent and contribute 
            to a revolutionary platform that merges health and art. By joining our community, 
            you'll be part of an innovative movement that inspires people to visualize their 
            wellness journey in new and exciting ways.
          </p>
          <h4 className="text-xl font-semibold mb-4 text-gray-800">Benefits for Artists</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
            <li>Revenue-sharing model that rewards your creativity</li>
            <li>Global exposure to a growing community of health-conscious art enthusiasts</li>
            <li>Opportunity to experiment with AI-assisted art creation</li>
            <li>Collaboration with cutting-edge technology in the health and wellness space</li>
          </ul>
          <div className="bg-blue-100 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Artist Testimonial</h4>
            <blockquote className="italic text-gray-700">
              "Collaborating with Axon has been an incredible journey. It's opened up new avenues 
              for my art and allowed me to connect with people in a meaningful way. Seeing how my 
              work inspires others on their health journeys is truly rewarding."
            </blockquote>
            <p className="mt-2 text-right text-gray-600">- Sarah Chen, Digital Artist</p>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Apply to Become an Axon Artist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForArtistsPage