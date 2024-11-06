import React from 'react'
import axios from 'axios'
import API_URL from '../Constants/URL.jsx'
import { useState,useEffect} from 'react'


const Table = () => {

    const [formdata, setFormdata] = useState([]);

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
    
    const formattedDate = formatDate('2024-06-11T13:02');
    console.log(formattedDate);  // Output: "06-11-2024 T 13:02"
    
     

      useEffect(() => {
        showData();
      }, []);

  return (
    <div>
        <div className='text-center pt-5 pb-2'>
            <h1>Travel Requests</h1>
        </div>
        <div className="overflow-x-auto max-w-5xl mx-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Date & Time</th>
        
      </tr>
    </thead>
    <tbody>
      
     {
        formdata.map((item,index)=>{
           return (
            <tr className="bg-base-200 " key={item._id}>
            <td>{index + 1}</td>
            <td>{item.username}</td>
            <td>{formatDate(item.date.slice(0,16))}</td>
            
          </tr>
           )

        })
     }
   
     
     
    </tbody>
  </table>
       </div>

    </div>
  )
}

export default Table