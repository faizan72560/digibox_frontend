import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Cart from './Cart'

const Home = () => {
    const [number, setnumber] = useState(1)
   
    const [data, setdata] = useState([])
    var [data1, setdata1] = useState([])

    const navigate=useNavigate()


    const addtocarthandler=async(id)=>{
        console.log(id)
          
        const config={
            headers:{
              'Content-Type': 'application/json',
            //   'Content-Type': 'application/json',

            },
            withCredentials:true
          }

        const res=await axios.post(`http://localhost:5000/api/v1/singlepost${id}`,config)
            console.log(res) 
            // var obj=res.data.post
            // console.log(obj)
            // setdata1([...data1,obj])

            localStorage.setItem('data',JSON.stringify(res.data.post))

            alert("items added to cart")
            navigate('/cart')
            
            

            



    }

    useEffect(()=>{

        const get=async()=>{

            const res=await axios.get("http://localhost:5000/api/v1/getpost")
            console.log(res)
            setdata(res.data.post)
        }
        get()

    },[])
  return (
    
    <div className='justify-center flex flex-row flex-wrap p-1'>
       
        {data&&
            data.map((elem)=>{
                return(
                    <div className='h-full w-52 shadow-2xl mx-1 my-1 rounded-lg'>
                        <div className=''>
                            <img className='w-full h-60 rounded-md' src={elem.image.url}/>
                            <div className='justify-center flex my-1' >
                                <h1>{elem.name}</h1>

                            </div>
                            <div className='justify-center flex my-1' >
                                <h1>Rs:{elem.price}</h1>

                            </div>
                            <div className='flex justify-center my-1'>
                                <button className='bg-green-400 rounded-xl h-7 hover:bg-green-500' onClick={()=>{addtocarthandler(elem._id)}}>Add To Cart</button>

                            </div>

                            {/* <div className='flex justify-center gap-16 bg-gray-300 rounded-md'>
                                <button>+</button>{}
                                <button>-</button>


                            </div> */}

                        </div>
                    </div>
                )
            })
        }



    </div>
    

  )
}

export default Home