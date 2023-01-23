import React from 'react'
import { useState,useEffect } from 'react'

const Cart = () => {
    const [data, setdata] = useState([])
    const [num, setnum] = useState(1)
    const [price, setprice] = useState('')

    useEffect(() => {
        const data=JSON.parse(localStorage.getItem('data'))
        setdata(data)
        console.log(data)

        setprice(data.price*num)
    
    }, [num])
    
  return (
    <div className='h-64 w-3/5 flex flex-row justify-center shadow-2xl  p-1 rounded-lg'>
        <img src={data.image&&data.image.url} className="rounded-md h-full w-2/4"/>
        <div className='flex flex-col items-center w-full h-full my-14'>
            <h1 className='text-2xl'>Rs:{data&&data.name}</h1>
            <h1 className='text-2xl'>Rs:{data&&data.price}</h1>
<div className='flex justify-between my-4 bg-slate-200 w-60 rounded-xl'>

            <button className='text-2xl'  onClick={()=>{setnum(num-1)}}>-</button>
            <h1>{num}</h1>
            <button className='text-2xl' onClick={()=>{setnum(num+1)}}>+</button>
</div>

<div className='flex justify-center '>
    <h1 className='text-2xl mx-1'>Total Price:</h1>
         <h1 className='text-2xl'>{price}</h1>

</div>



        </div>

    </div>
  )
}

export default Cart