import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const List = () => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {

      const response = await axios.get(
        backendUrl + '/api/product/list'
      );

      if(response.data.success){
        setList(response.data.products);
      }
      else{
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }


  useEffect(() => {
    fetchList();
  }, []);


  return (
    <div className='w-full'>

      <p className='mb-5 text-xl font-bold'>
        Product List
      </p>


      <div className='flex flex-col gap-3'>

        {
          list.map((item,index)=>(

            <div 
              key={index}
              className='grid grid-cols-[80px_1fr_100px] 
              items-center border p-3 gap-4'
            >

              <img
                src={item.image[0]}
                alt={item.name}
                className='w-20 h-20 object-cover'
              />


              <div>

                <p className='font-semibold'>
                  {item.name}
                </p>

                <p className='text-sm text-gray-500'>
                  {item.description}
                </p>

                <p>
                  {item.category} - {item.subCategory}
                </p>

                <p>
                  Sizes: {item.sizes.join(", ")}
                </p>

              </div>


              <p className='font-semibold'>
                ₹{item.price}
              </p>


            </div>

          ))
        }

      </div>

    </div>
  )
}

export default List