import {configureStore} from "@reduxjs/toolkit"
import accountReducer from "../features/accounts/accountSlice-v2"
import customerReducer from "../features/customers/customerSlice-v2"

const store = configureStore({

  reducer : {

    account : accountReducer,
    customer : customerReducer

  }


})


export default store