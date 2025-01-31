import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    isLoading : false,
    reviews : []
}


  export const addReview = createAsyncThunk(
    "/products/addReview",
    async (formdata) => {
      const result = await axios.post(
        `http://localhost:5000/api/shop/review/add`,{formdata}
      );
  
      return result?.data;
    }
  );

  export const getReviews = createAsyncThunk(
    "/products/getReviews",
    async (id) => {
      const result = await axios.get(
        `http://localhost:5000/api/shop/review/${id}`
      );
  
      return result?.data;
    }
  );
const reviewSlice = createSlice({
    name:'reviewSlice',
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder.addCase(getReviews.pending, (state)=>{
            state.isLoading = true;
        }).addCase(getReviews.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.reviews = action.payload.data;
        }).addCase(getReviews.rejected, (state)=>{
            state.isLoading = false;
            state.reviews = []; 
        })
    }
})

export default reviewSlice.reducer;