import {  userReducer } from "./Components/reducer/userreducer"
import { configureStore } from "@reduxjs/toolkit"
// import { GetAllPostReducer, GetUserPostReducer, PostReducer } from "./Components/reducer/postreducer"
// // import { addpostReducer, deletepostReducer, getallpostReducer, getpostReducer, SinglepostReducer, updatepostReducer } from "./Components/reducer/addpostreducer"
// // import { BookingpostReducer, deleteBookingReducer, userBookingReducer } from "./Components/reducer/bookingreducer"
// // import { Getsinglepost } from "./Components/action/useraction"

const store=configureStore({
    reducer:{
        user:userReducer,
        // post:PostReducer,
        // getallpost:GetAllPostReducer,
        // userpost:GetUserPostReducer

       
        
      
    
    }
    , middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),   

    })

export default store