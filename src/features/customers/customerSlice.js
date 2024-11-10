
// //we will import the reducers in the store and the action creator functions in the components where we want to dispatch the actions


// const initialStateCustomer = {

//   fullName : "Penaldo",
//   nationalId : "nish4919",
//   createdAt : ""
// }


// export default function customerReducer(state = initialStateCustomer,action)
// {

//    switch(action.type)
//    {

//      case "customer/create":
//      return {...state,fullName : action.payload.fullName,nationalId : action.payload.nationalId,createdAt : new Date()}


//     case "account/update":

//     return {...state,fullName : action.payload}


//     default :
//     return state


//    }




// }


// export function createCustomer(fullName,nationalId)
// {


//    return {

//      type : "customer/create",

//      payload : {
//       fullName,
//       nationalId
//      }
 

//    }


// }

// export function updateCustomer(fullName)
// {

//   return {
//      type : "customer/update",
//      payload : fullName
//   }


// }




