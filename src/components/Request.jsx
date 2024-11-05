import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import API_URL from "../Constants/URL.jsx";

const formSchema = z.object({
  username: z.string().min(4).max(20),
  phone: z.string().min(10).max(10),
  date: z.string(),
  pickupaddress: z.string().min(3).max(200),
  dropaddress: z.string().min(3).max(200),
  killometre: z.string().min(0).max(800),
});

const Request = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const sendTask = async (data) => {
    try {
      console.log(data);
      toast.success("Taxi Request Submitted Successfully 👍");
      await axios.post(API_URL, {
        username: data.username,
        phone: data.phone,
        date: data.date,
        pickupaddress: data.pickupaddress,
        dropaddress: data.dropaddress,
        kilometre: data.killometre,
      });
     
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center min-h-screen items-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">Travels Booking Form</h2>
          <form className="space-y-4" onSubmit={handleSubmit(sendTask)}>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Username <span className='text-red-900'>*</span></span>
              </label>
              <input 
                id="username"
                type="text" 
                placeholder="Enter your name" 
                className="input input-bordered w-full" 
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-600 text-sm">{errors.username.message}</p>
              )}
            </div>
             
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone <span className='text-red-900'>*</span></span>
              </label>
              <input
                id="phone" 
                type="tel" 
                placeholder="Enter your phone number" 
                className="input input-bordered w-full" 
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Date <span className='text-red-900'>*</span></span>
              </label>
              <input 
                type="datetime-local" 
                className="input input-bordered w-full" 
                {...register("date")}
              />
              {errors.date && (
                <p className="text-red-600 text-sm">{errors.date.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Pickup Address <span className='text-red-900'>*</span></span>
              </label>
              <input 
                type="text" 
                placeholder="Enter pickup address" 
                className="input input-bordered w-full" 
                {...register("pickupaddress")}
              />
              {errors.pickupaddress && (
                <p className="text-red-600 text-sm">{errors.pickupaddress.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Drop Address <span className='text-red-900'>*</span></span>
              </label>
              <input 
                type="text" 
                placeholder="Enter drop address" 
                className="input input-bordered w-full" 
                {...register("dropaddress")}
              />
              {errors.dropaddress && (
                <p className="text-red-600 text-sm">{errors.dropaddress.message}</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Kilometers (Optional)</span>
              </label>
              <input 
                type="number" 
                placeholder="Enter estimated kilometers" 
                className="input input-bordered w-full" 
                {...register("killometre")}
              />
              {errors.killometre && (
                <p className="text-red-600 text-sm">{errors.killometre.message}</p>
              )}
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
  );
};

export default Request;
