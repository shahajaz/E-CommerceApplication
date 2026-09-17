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
}) => {

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
  extraReducers: (builder) => {},
});

export default productSlice.reducer;
