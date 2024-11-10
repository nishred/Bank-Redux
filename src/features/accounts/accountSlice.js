// // a slice is a part of the total state

// // a slice of that state
// // Here, we place the reducers, action creators and the intial state

// const initialStateAccount = {
//   name : "nishanth",  
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: (Number(state.balance) + Number(action.payload)).toFixed(2) };

//     case "account/withdraw":
//       return { ...state, balance: Number(state.balance) - Number(action.payload) };

//     case "account/requestLoan":
//       if (state.loan > 0) return {...state}

//       return {
//         ...state,
//         loan: action.payload.amount,
//         balance: state.balance + action.payload.amount,
//         loanPurpose: action.payload.purpose,
//       };

//     case "account/payLoan":
//       return {
//         ...state,
//         loanPurpose: "",
//         loan: 0,
//         balance: Number(state.balance) - Number(action.payload),
//       };

//     default:
//       return state;
//   }
// }

// export function deposit(amount,currency) {
  
//     if(currency === "USD")  
//     return {
//     type: "account/deposit",
//     payload: amount,
//   };


// // If we return a function here, redux understands that this is the asynchronous logic that has to be executed before dsipatching anything to the store

//   return async function(dispatch,getState)
//   {
//     //API call

//      const response = await fetch(`https://api.frankfurter.app/latest?base=${currency}&symbols=USD`)      

//      const json = await response.json()

//      const convertedUSD = (amount*json.rates.USD).toFixed(2) 
  
//     dispatch({type : "account/deposit",payload : convertedUSD})

//   }
// }

// export function withdraw(amount) {
//   return {
//     type: "account/withdraw",
//     payload: amount,
//   };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amount: amount,
//       purpose: purpose,
//     },
//   };
// }

// export function payLoan() {
//   return {
//     type: "account/payLoan",
//   };
// }





