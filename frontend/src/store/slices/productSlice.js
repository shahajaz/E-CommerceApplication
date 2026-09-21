import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { toast } from "react-toastify";

export const fetchProducts = createAsyncThunk("product/fetchAll", async({
  availability="", 
  price="0-100000", 
  category="", 
  ratings="", 
  search="",
  page = 1,
}, thunkAPI) => {
  try {
    const params = new URLSearchParams();

    if(category) params.append("category", category);
    if(availability) params.append("availability", availability);
    if(price) params.append("price", price);
    if(ratings) params.append("ratings", ratings);
    if(search) params.append("search", search);
    if(page) params.append("page", page);

    const response = await axiosInstance.get(`/products?${params.toString()}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message || "Failed to fetch products");
  }

});

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [],
    productDetails: {},
    totalProducts: 0,
    topRatedProducts: [],
    newProducts: [],
    aiSearching: false,
    isReviewDeleting: false,
    isPostingReview: false,
    productReviews: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
  },
});

export default productSlice.reducer;
