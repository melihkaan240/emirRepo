import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    domain: [],
  url: "",
};

export const subfinderSlice = createSlice({
  name: "domain",
  initialState,
  reducers: {
    setSubDomain : (state, action) =>{
     
      // state.params = action.payload.params;
      state.params = action.payload;
      //  state.username = action.payload;
             
    }
    // setMyData: (state, action) => {
    //   // 'params' ve 'url' değerlerini ayrı ayrı kontrol edip güncelleme
    //   if (action.payload.params !== undefined) {
    //     state.params = action.payload.params;
    //   }
    //   if (action.payload.url !== undefined) {
    //     state.url = action.payload.url;
    //   }
    // },
  },
});

export const { setSubDomain } = subfinderSlice.actions;
export default subfinderSlice.reducer;