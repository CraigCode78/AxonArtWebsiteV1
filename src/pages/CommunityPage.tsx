import React from 'react'

const CommunityPage: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Community</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">User Stories</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">
                  "Axon has completely transformed how I view my fitness journey. Seeing my progress 
                  as beautiful art keeps me motivated and makes health tracking fun!"
                </p>
                <p className="text-right text-gray-600">- Alex Thompson</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Events and Workshops</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-2">Upcoming Virtual Workshop</h4>
                <p className="text-gray-700">
                  "Interpreting Your Health Data Through Art" - Join us for an interactive session 
                  with health experts and artists.
                </p>
                <p className="mt-2 text-blue-600">Date: June 15, 2024 | Time: 2:00 PM EST</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Join Our Community</h3>
            <p className="text-lg text-gray-700 mb-6">
              Connect with fellow Axon users, share your artistic health journey, and get inspired 
              by others. Our community is a space for support, creativity, and wellness.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Join the Axon Community
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityPage