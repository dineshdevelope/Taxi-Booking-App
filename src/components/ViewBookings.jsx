import React, { useEffect, useState } from "react";
import { API_URL } from "../Constants/URL";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const ViewBookings = () => {

  const [formdata, setFormdata] = useState([]);
  const navigate = useNavigate();

  const showData = async () => {
    const res = await axios.get(API_URL);
    //console.log(res.data);
    setFormdata(res.data);
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${month}-${day}-${year} T ${hours}:${minutes}`;
}
   
   const handleDelete = async (_id) => {
    //console.log(_id);
    const confirm = window.confirm("Are you sure want to Delete?");
    if (confirm) {
      const res = await axios.delete(API_URL + _id);
      console.log(res.data);
      toast.success("Request Deleted Successfully");
      showData();
    }
  }; 

  useEffect(() => {
    showData();
  }, []);

  return (

<div>
<div className='px-5'>

<div className='pt-5'>
  <p className='text-center font-serif font-semibold'>Travel Booking List</p>
</div>

{ formdata.length > 0 ?( <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-5 ">

{formdata.map((item,index)=>{
  return(
  
    <div className="max-w-sm p-6 my-5 bg-white border border-pink-300 shadow-orange-600 border-x-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item._id}>
    <div className='flex sm:flex-none items-center justify-evenly'>
    <p className=' mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{index + 1}</p>
    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
    {item.username}
    </h5>
    <a href= {`tel:+91${item.phone}`} className='mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{item.phone}</a>
    </div>
    
    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-x-auto">
    <p>Date: {formatDate(item.date.slice(0,16))}</p>
    <p>Pickup Address: {item.pickupaddress}</p>
    <p>Drop Address: {item.dropaddress}</p>
    <p>Kilometers: {item.kilometre}</p>
    </div>
    
    <div className="flex justify-center space-x-5 mt-4">
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none font-mono">Update</button>
    <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none font-mono"
    onClick={() => handleDelete(item._id)}
    >Delete</button>
    </div>
    </div>
  )
})} 



</div> ) :  <div className="pt-3">
  <p className="text-center font-semibold font-mono">Your List Is Empty 😶‍🌫️</p>
  
</div>
}




  </div> 
  </div>
  )
}

export default ViewBookings