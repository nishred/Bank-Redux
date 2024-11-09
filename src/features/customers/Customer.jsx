// In order to read data from the redux store we have to use the useSelector hook

import { useSelector } from "react-redux"

const Customer = () => {
  
   
   const customer = useSelector((store) => {

     return store.customer

   })

  

  // we must do as much data manipulation and login in this useSelector callback as much as possible


  return (

    <>
    
    <h1>{customer.fullName}</h1>
    <h1>{customer.nationalId}</h1>

    <h1>{customer.createdAt.toString()}</h1>
    
    
    </>    
 
    
  )



}

export default Customer
