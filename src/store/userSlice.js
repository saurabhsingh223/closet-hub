// User state management
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    address: '123 Fashion Street, Mumbai, Maharashtra 400001',
  },
  orders: [
    // Mock order data - replace with API calls later
    {
      id: 'ORD001',
      date: '2024-10-15',
      status: 'Delivered',
      total: 2499,
      items: [
        {
          name: 'Black Pullover Hoodie',
          size: 'L',
          quantity: 1,
          price: 999,
        },
        {
          name: 'Slim Fit Black Jeans',
          size: 'M',
          quantity: 1,
          price: 1499,
        },
      ],
    },
    {
      id: 'ORD002',
      date: '2024-10-20',
      status: 'In Transit',
      total: 1299,
      items: [
        {
          name: 'Classic Blue Jeans',
          size: 'L',
          quantity: 1,
          price: 1299,
        },
      ],
    },
    {
      id: 'ORD003',
      date: '2024-10-25',
      status: 'Processing',
      total: 3998,
      items: [
        {
          name: 'Leather Jacket',
          size: 'XL',
          quantity: 1,
          price: 3999,
        },
      ],
    },
  ],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    addOrder: (state, action) => {
      state.orders.unshift(action.payload);
    },
  },
});

export const { updateUser, addOrder } = userSlice.actions;
export default userSlice.reducer;
