import React from 'react'
import { Box, Smartphone, Lightbulb } from 'lucide-react'

const FutureDevelopmentsPage: React.FC = () => {
  return (
    <section id="future-developments" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Future Developments</h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-600">
            What's Next for Axon
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Box className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">NFT Integration</h4>
              <p className="text-gray-600">
                Own and trade unique digital art pieces representing your health milestones.
              </p>
            </div>
            <div className="text-center">
              <Smartphone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Mobile App</h4>
              <p className="text-gray-600">
                Access your health art on-the-go with our upcoming mobile application.
              </p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Educational Collaborations</h4>
              <p className="text-gray-600">
                Partnerships with health institutions to create informative, artistic content.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-center">Roadmap</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-blue-600 rounded-full h-4 w-4 mr-4"></div>
                <span className="text-gray-700">Q3 2024: Launch of NFT marketplace for health milestone artworks</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-400 rounded-full h-4 w-4 mr-4"></div>
                <span className="text-gray-700">Q4 2024: Beta release of mobile app</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-200 rounded-full h-4 w-4 mr-4"></div>
                <span className="text-gray-700">Q1 2025: Announcement of first major educational partnership</span>
              </li>
              <li className="flex items-center">
                <div className="bg-gray-300 rounded-full h-4 w-4 mr-4"></div>
                <span className="text-gray-700">Q2 2025: Global art competition featuring AI-health collaborations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FutureDevelopmentsPage