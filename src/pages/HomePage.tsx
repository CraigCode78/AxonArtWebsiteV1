import React from 'react'
import { ArrowRight, Zap, Users, Palette } from 'lucide-react'
import ImageGallery from '../components/ImageGallery'

const HomePage: React.FC = () => {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">Your Fitness Journey, Visualised!</h1>
          <p className="text-xl text-gray-600 mb-8">Experience your fitness journey like never before. Axon transforms your WHOOP data into personalised art.</p>
          <a
            href="https://healthartv2-craighepburn.replit.app/login"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Connect Your WHOOP Account
            <ArrowRight className="ml-2" />
          </a>
        </div>

        <ImageGallery />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Zap className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Artworks</h3>
            <p className="text-gray-600">Transform your health data into unique, evolving art pieces.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Palette className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Artist Collaborations</h3>
            <p className="text-gray-600">Experience diverse art styles from global artists.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
            <p className="text-gray-600">Share your journey and connect with like-minded individuals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage