import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#features" className="hover:text-blue-400">Features</a></li>
              <li><a href="#blog" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#data-protection" className="hover:text-blue-400">Data Protection</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-2">Stay updated with our latest news and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Axon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer