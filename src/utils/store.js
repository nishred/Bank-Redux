import {createStore} from "redux"

import {combineReducers} from "redux"

import accountReducer from "../features/accounts/accountSlice"

import customerReducer from "../features/customers/customerSlice"


const rootReducer = combineReducers({

   account : accountReducer,
   customer : customerReducer

})


const store = createStore(rootReducer)


export default store




//The goal of the reducer to calculate the new state based on the current state and received action

//reducers are not allowed to mutate the state and they have to be pure functions with no asynchronous logic or other side effects

//we name the actions based on the state domain/ what happened or what should happen


// a store is a container for reducers



// In redux we create action creators to automate the process.

//create one action creator for one possible action. They return actions




// In redux we don't directly dispatch actions to the reducer but we do it to the store


// we have to combine all the reducers into a root reducer


//  our state now looks like  {

//    account : {},
//    customer : {}
 
// }


































