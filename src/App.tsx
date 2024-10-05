import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import HowItWorksPage from './pages/HowItWorksPage'
import FeaturesPage from './pages/FeaturesPage'
import ForArtistsPage from './pages/ForArtistsPage'
import CommunityPage from './pages/CommunityPage'
import FutureDevelopmentsPage from './pages/FutureDevelopmentsPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      <main>
        <HomePage />
        <AboutPage />
        <HowItWorksPage />
        <FeaturesPage />
        <ForArtistsPage />
        <CommunityPage />
        <FutureDevelopmentsPage />
        <BlogPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}

export default App