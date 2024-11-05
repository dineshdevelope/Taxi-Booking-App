import React from 'react'

const Request = () => {
  return (
    <div >
      <div className="flex justify-center min-h-screen items-center bg-gray-100">
  <div className="bg-white p-6 rounded shadow-lg w-full max-w-xl">
    <h2 className="text-2xl font-semibold mb-4 text-center">Travels Booking Form</h2>
    <form className="space-y-4">
      
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Username <span className='text-red-900'>*</span></span>
        </label>
        <input 
          type="text" 
          placeholder="Enter your name" 
          className="input input-bordered w-full" 
          required 
        />
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Phone <span className='text-red-900'>*</span></span>
        </label>
        <input 
          type="tel" 
          placeholder="Enter your phone number" 
          className="input input-bordered w-full" 
          required 
        />
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Date <span className='text-red-900'>*</span></span>
        </label>
        <input 
          type="datetime-local" 
          className="input input-bordered w-full" 
          required 
        />
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Pickup Address <span className='text-red-900'>*</span></span>
        </label>
        <input 
          type="text" 
          placeholder="Enter pickup address" 
          className="input input-bordered w-full" 
          required 
        />
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Drop Address <span className='text-red-900'>*</span></span>
        </label>
        <input 
          type="text" 
          placeholder="Enter drop address" 
          className="input input-bordered w-full" 
          required 
        />
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Kilometers (Optional)</span>
        </label>
        <input 
          type="number" 
          placeholder="Enter estimated kilometers" 
          className="input input-bordered w-full" 
           
        />
      </div>

      <button 
        type="submit" 
        className="btn btn-secondary w-full mt-4"
      >
        Book Trip
      </button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Request