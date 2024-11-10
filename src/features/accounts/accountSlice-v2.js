import { createSlice } from "@reduxjs/toolkit";

const initialAccountState = {
  name: "Nish",
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialAccountState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + Number(action.payload);
    },

    withdraw(state, action) {
      if (action.payload > state.balance) return;

      state.balance -= Number(action.payload);
    },

    requestLoan: {
      prepare(loanAmount, loanPurpose) {
        return {
          payload: {
            loanAmount,
            loanPurpose,
          },
        };
      },
rpos
      reducer(state, action) {
        const loanAmount = Number(action.payload.loanAmount);
        const loanPurpose = action.payload.loanPurpose;
        state.balance += loanAmount;
        state.loan = loanAmount;
        state.loanPurpose = loanPue;
      },
    },

    payLoan(state) {
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD")
    return {
      type: "account/deposit",
      payload: amount,
    };

  return async function fetchData(dispatch, getState) {
    const response = await fetch(
      `https://api.frankfurter.app/latest?base=${currency}&symbols=USD`
    );

    const json = await response.json();

    const convertedCurrency = (amount * json.rates.USD).toFixed(2);

    dispatch(accountSlice.actions.deposit(convertedCurrency));
  };
}

export default accountSlice.reducer;
