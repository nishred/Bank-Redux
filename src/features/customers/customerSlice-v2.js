import { createSlice } from "@reduxjs/toolkit";
import { createCustomer, updateCustomer } from "./customerSlice";

const initialCustomerState = {
  fullName: "Zac",
  nationalId: "abd",
  createdAt: null,
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialCustomerState,

  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
          },
        };
      },

      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = new Date();
      },
    },

    updateCustomer(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateCustomer } = customerSlice.actions;

export default customerSlice.reducer;
