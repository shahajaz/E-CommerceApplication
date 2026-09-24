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

// Fetch product details
export  const fetchProductDetails = createAsyncThunk("product/singleProduct", async(id, thunkAPI) => {
  try {
    const res = await axiosInstance.get(`/product/singleProduct/${id}`);
    return res.data.product;
  }catch (error){
    return thunkAPI.rejectWithValue(error.response.data.message || "Failed to fetch product details");
  }
});

// Post a review for a product
export  const postReview = createAsyncThunk("product/postReview", async({ productId, reviewData }, thunkAPI) => {
  try {
    const res = await axiosInstance.put(`/product/postReview/${productId}`, reviewData);
    toast.success(res.data.message);
    return res.data.review;
  }catch (error){
    toast.error(error.response.data.message || "Failed to post review");
    return thunkAPI.rejectWithValue(error.response.data.message || "Failed to post review");
  }
});

//Delete a review for a product
export  const deleteReview = createAsyncThunk("product/delete/review", async({ productId, reviewId }, thunkAPI) => {
  try {
    const res = await axiosInstance.delete(`/product/deleteReview/${productId}/${reviewId}`);
    toast.success(res.data.message);
    return reviewId;
  }catch (error){
    toast.error(error.response.data.message || "Failed to delete review");
    return thunkAPI.rejectWithValue(error.response.data.message || "Failed to delete review");
  }
});


//Fetch AI filtered products
export  const fetchAIFilteredProducts = createAsyncThunk("product/ai-search", async(userPrompt, thunkAPI) => {
  try {
    const res = await axiosInstance.post(`/product/ai-search`, userPrompt);
    thunkAPI.dispatch(toggleAIModal());
    return res.data;
  }catch (error){
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data.message || "Failed to fetch product details");
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
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productReviews = [action.payload, ...state.productReviews];
      state.productDetails = action.payload.reviews;

    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
    })

    .addCase(postReview.pending, (state) => {
      state.isPostingReview = true;
    })

    .addCase(postReview.fulfilled, (state, action) => {
      state.isPostingReview = false;
      state.productReviews.push(action.payload);
    })

    .addCase(postReview.rejected, (state, action) => {
      state.isPostingReview = false;
      toast.error(action.payload);
    })


    .addCase(deleteReview.pending, (state) => {
      state.isReviewDeleting = true;
    })

    .addCase(deleteReview.fulfilled, (state, action) => {
      state.isReviewDeleting = false;
      state.productReviews = state.productReviews.filter((review) => review._id !== action.payload);
    })

    .addCase(deleteReview.rejected, (state, action) => {
      state.isReviewDeleting = false;
      toast.error(action.payload);
    })


    


  }
});

export default productSlice.reducer;
