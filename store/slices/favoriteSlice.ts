import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  image: any;
  measurement: string;
}

interface FavoriteState {
  items: Product[];
}

const initialState: FavoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find(item => item.id === action.payload.id);

      if (exists) {
        // Remove item
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        // Add full product object
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
