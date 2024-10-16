import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    
addItem: (state, action) => {
  const existingItem = state.items.find(item => item.id === action.payload.id);
  if (existingItem) {
    existingItem.quantity += action.payload.quantity; // Will now handle increment and decrement
    // Ensure quantity never goes below 0
    if (existingItem.quantity < 0) existingItem.quantity = 0;
  } else {
    // If adding for the first time
    state.items.push({ ...action.payload, quantity: action.payload.quantity });
  }
},
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = []; // Reset items to an empty array
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

