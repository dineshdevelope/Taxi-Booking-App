import React from 'react'

const MainContent = () => {
  return (
    <div>
        <section className="py-10 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
            <p>We offer competitive rates and transparent pricing with no hidden fees.</p>
          </div>
          <div className="w-full md:w-1/3 px-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">Safe and Reliable</h3>
            <p>Our drivers are experienced and background-checked for your safety.</p>
          </div>
          <div className="w-full md:w-1/3 px-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p>Available round the clock, we are here whenever you need a ride.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 S.R.K Travels. All rights reserved.</p>
        <p>Contact us at srktravels@gmail.com</p>
      </footer>
     </div>
  )
}

export default MainContent