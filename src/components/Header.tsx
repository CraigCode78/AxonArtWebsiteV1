import React from 'react'
import { Palette } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Palette className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-2xl font-bold text-gray-800">Axon</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#artists" className="text-gray-600 hover:text-blue-600">For Artists</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Sign Up
        </button>
      </div>
    </header>
  )
}

export default Header