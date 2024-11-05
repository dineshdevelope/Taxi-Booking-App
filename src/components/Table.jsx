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

      useEffect(() => {
        showData();
      }, []);

  return (
    <div>
        <div className='text-center pt-5 pb-2'>
            <h1>Travel Requests</h1>
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Number</th>
        <th>View </th>
      </tr>
    </thead>
    <tbody>
      
     {
        formdata.map((item)=>{
           return (
            <tr className="bg-base-200 " key={item._id}>
       
            <td>{item.username}</td>
            <td>{item.phone}</td>
            <td className='bg-pink-300  sm:bg-inherit rounded sm:rounded-none'>View</td>
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