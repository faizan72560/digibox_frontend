import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Admin = () => {
    const [name, setname] = useState('')
    const [image, setimage] = useState()
    const [price, setprice] = useState('')

    
  const pickedhandler=(e)=>{

    console.log(e.target.name)
    
    if(e.target.name==='image'){
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setimage(reader.result)
          console.log(image)
          
        }
      }
      
      reader.readAsDataURL(e.target.files[0])
    }
    
  }


  
  const registerhandler=async(e)=>{
    e.preventDefault()
    console.log(image)
    const formdata=new FormData()
    formdata.append('name',name)
    
    
    formdata.append('image',image)
    formdata.append('price',price)

    for (var pair of formdata.entries()) {
      console.log(pair[0]+ ' - ' + pair[1]); 
    }

    const config={
        headers:{
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/json',
  
        },
        withCredentials:true
      }
      
   
    const {data}=await axios.post('http://localhost:5000/api/v1/addpost',formdata,config)
    console.log(data)
   
    // console.log(username,email,password)
    
    //  await dispatch(register(formdata))

    //  navigate('/home')

    
    
    

  }




  return (
    <div>
         <div className='flex h-screen justify-center items-center '>

<div className=' md:h-[320px] h-4/6  w-72 border-2 p-2 rounded-md'>
  <form >
  <div className='flex justify-center'>
  <h1 className='text-4xl my-3 '>Add Product</h1>
  </div>
  <div className='flex flex-col my-1'>
  <label>name</label>
    <input className='border-2 h-8' type="text" placeholder='Username' value={name} onChange={(e)=>{setname(e.target.value)}}/>


  </div>

  
  <div className='flex flex-col my-1'>
    <label>Pic</label>
    <input  className='border-2 h-8' type="file"  accept='image/*' name='image' placeholder='' onChange={pickedhandler}/>
  </div>

  
  <div className='flex flex-col my-1'>
    <label>Price</label>
    <input  className='border-2 h-8' type="number" placeholder='Price' onChange={(e)=>{setprice(e.target.value)}}/>
  </div>

  <div className='flex flex-col my-2'>
    <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-md h-7'onClick={registerhandler}>Add Product</button>

  </div>


  </form>

</div>

</div>
    </div>
  )
}

export default Admin