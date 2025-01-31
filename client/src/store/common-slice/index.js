import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { resetOrderDetails } from '../order-slice';

const initialState = {
    isLoading : false,
    featureImageList : []
}

export const getFeatureImage = createAsyncThunk(
    "/products/getFeatureImage",
    async () => {
      const result = await axios.get(
        `http://localhost:5000/api/common/feature/get`
      );
  
      return result?.data;
    }
  );

  export const addFeatureImage = createAsyncThunk(
    "/products/addFeatureImage",
    async (image) => {
      const result = await axios.post(
        `http://localhost:5000/api/common/feature/add`,{image}
      );
  
      return result?.data;
    }
  );


const commonSlice = createSlice({
    name:'commonSlice',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(getFeatureImage.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getFeatureImage.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.featureImageList = action.payload.data;
        }).addCase(getFeatureImage.rejected,(state)=>{
            state.isLoading = false;
            state.featureImageList = [];
        })
    }
})


export default commonSlice.reducer;