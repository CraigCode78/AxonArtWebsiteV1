import React from 'react'
import { PaintBucket, Users, Zap, Cpu } from 'lucide-react'

const FeaturesPage: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <PaintBucket className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Artworks</h3>
            <p className="text-gray-600">
              Watch your health metrics transform into unique art pieces that evolve over time. 
              Each artwork is a reflection of your personal wellness journey, creating a visual 
              narrative of your progress and motivating you to reach your health goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Artist Collaborations</h3>
            <p className="text-gray-600">
              Experience a diverse range of art styles through our partnerships with talented 
              artists from around the globe. Choose from various artistic interpretations to 
              find the perfect visual representation of your health data.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community and Sharing</h3>
            <p className="text-gray-600">
              Connect with like-minded individuals on their wellness journeys. Share your 
              art pieces, engage with others' creations, and find inspiration in a supportive 
              community that celebrates the intersection of health and creativity.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Cpu className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Technological Innovation</h3>
            <p className="text-gray-600">
              Powered by cutting-edge AI and Web3 technologies, Axon offers a secure, 
              transparent, and innovative platform. Our advanced algorithms ensure that 
              your health data is accurately and creatively translated into stunning visual art.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesPage