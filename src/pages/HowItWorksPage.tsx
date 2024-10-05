import React from 'react'
import { Link, Palette, Share } from 'lucide-react'

const HowItWorksPage: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
              <Link className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Connect Your Health Data</h3>
            <p className="text-gray-600">Securely link your fitness trackers or health apps to Axon.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
              <Palette className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Choose an Art Style</h3>
            <p className="text-gray-600">Select from a variety of art styles contributed by global artists.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
              <Share className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Generate and Share</h3>
            <p className="text-gray-600">Transform your data into art and share it with the community.</p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Watch your health journey unfold as beautiful, evolving artworks. As your data changes, 
            so does your art, creating a unique visual representation of your wellness progress.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Start Your Artistic Health Journey
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksPage