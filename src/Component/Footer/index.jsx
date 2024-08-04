import React from 'react'
import app from '../../assets/app.png'
import Google from '../../assets/googlepay.png'
function Footer() {
  return (
    <div className="bg-gray-900 text-white font-sans">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold mb-2">yellowkitchen</h1>
          <hr className="border-gray-400" />
          <div className="flex space-x-4 mt-4">
            <a href="#" className=" rounded-md px-4 py-2 text-gray-800 font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <img src={app} alt="App Store" />
            </a>
            <a href="#" className=" rounded-md px-4 py-2 text-gray-800 font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              <img src={Google} alt="Google Play" />
            </a>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white hover:text-gray-300"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-x-8 md:space-x-16">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">About us</h2>
            <ul className="text-gray-400">
              <li>Concept</li>
              <li>Franchise</li>
              <li>Business</li>
              <li>Restaurant signup</li>
              <li>For Investors</li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Get help</h2>
            <ul className="text-gray-400">
              <li>Read FAQs</li>
              <li>Restaurants</li>
              <li>Specialities</li>
              <li>Sign up to deliver</li>
              <li>English <i className="fas fa-chevron-down"></i></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact us</h2>
            <ul className="text-gray-400">
              <li>Yellow kitchen Paris 11</li>
              <li>69 avenue de la Republique 75011 Paris</li>
              <li>0800 111 126</li>
              <li>contact@yellowkitchens.com</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gray-300">Terms</a>
              <span className="text-gray-400">© 2020 Yellow kitchen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer