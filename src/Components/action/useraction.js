import axios from 'axios'

export const loginuser=(email,password)=>async(dispatch)=>{
    try{
        dispatch({type: "LoginRequest"})

        
        const config={
            headers:{
              'Content-Type': 'application/json',
            //   'Content-Type': 'application/json',

            },
            withCredentials:true
          }
        const {data}=await axios.post('http://localhost:5000/api/v1/login',{email,password},config)
        console.log(data)


        dispatch({
            type:"LoginSuccess",
            payload:data.user
        })

    }catch(err){
        dispatch({
            type:"LoginFailure",
            payload:err
        })
    }
}


export const register=(formdata)=>async(dispatch)=>{
    try{
        dispatch({
            type:"LoginRequest"
        })
        console.log(formdata)
        for (var pair of formdata.entries()) {
            console.log(pair[0]+ ' - ' + pair[1]); 
          }

          const config={
            headers:{
            //   'Content-Type': 'multipart/form-data',
              'Content-Type': 'application/json',

            },
            withCredentials:true
          }
          
       
        const {data}=await axios.post('http://localhost:5000/api/v1/register',formdata,config)
        console.log(data)

        dispatch({
            type:"LoginSuccess",
            payload:data.user
        })

    }catch(err){
        dispatch({
            type:"LoginFailure",
            payload:err.response.data.message
        })

    }
}




export const getuser=()=>async(dispatch)=>{
    try{
        dispatch({
            type:'LoadRequest'
        })
        
        const config={
            // headers:{
            // //   'Content-Type': 'multipart/form-data',
            //   'Content-Type': 'application/json',

            // },
            withCredentials:true
          }
          

        const {data}= await axios.get('http://localhost:5000/api/v1/me',config)
        console.log(data)
        dispatch({
            type:"LoadSuccess",
            payload:data.user
        })

    }catch(err){
        dispatch({
            type:"LoadFailure",
            payload:err.response.data.message
        })
    }

}

// export const getPost=(search='',page=1)=>async(dispatch)=>{
//     try{
//         dispatch({
//             type:"GET_POST_REQUEST"
//         })

//         console.log(search,page)

//         console.log(page)
//         // search=search.parse()
        
//         let price=[0,1800]


//         let link = `/api/v1/getpost?keyword=${search}&page=${page}`;
        
//     //   if (search) {
//     //     console.log(search)
//     //     let currentPage=2
//     //     let price=[0,1200]
//     //     link = `/api/v1/getpost?keyword=${search}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
//     //   }

//       console.log(link)
        
//         const {data}=await axios.get(link)
//         console.log(data)
//         dispatch({
//             type:"GET_POST_SUCCESS",
//             payload:data.post
//         })


//     }catch(err){
//         dispatch({
//             type:"GET_POST_FAILURE",
//             payload:err
//         })

//     }
// }



export const logoutuser=()=>async(dispatch)=>{
    try{

        const config={
          
            withCredentials:true
          }
          
       
        dispatch({type: "LogoutUserRequest"})
        console.log("hello")

        const {data}=await axios.get('http://localhost:5000/api/v1/logout',config)
        console.log(data)


        dispatch({
            type:"LogoutUserSuccess",
            payload:data.user
        })

    }catch(err){
        dispatch({
            type:"LogoutUserFailure",
            payload:err.response.data.message
        })
    }
}


// export const Getsinglepost=(id)=>async(dispatch)=>{

//     try{
//         dispatch({type: "SinglePostRequest"})
//         console.log("hello")

//         const {data}=await axios.post(`api/v1/singlepost${id}`)
//         console.log(data)


//         dispatch({
//             type:"SinglePostSuccess",
//             payload:data.post
//         })

//     }catch(err){
//         dispatch({
//             type:"SinglePostFailure",
//             payload:err.response.data.message
//         })
//     }




// }



// export const Getuserbooking=()=>async(dispatch)=>{

//     try{
//         dispatch({type:"UserbookingRequest"})
        

//         const {data}=await axios.get(`api/v1/getuserbooking`)
//         console.log(data)


//         dispatch({
//             type:"UserbookingSuccess",
//             payload:data.Booking
//         })

//     }catch(err){
//         dispatch({
//             type:"UserbookingFailure",
//             payload:err.response.data.message
//         })
//     }




// }

