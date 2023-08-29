import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
}

const categoriesSlice = createSlice({
    name: 'categories',
    reducers: {
        status: (state) => 'Under Construction'
    }
})

export const { status } = categoriesSlice.actions;
export default categoriesSlice.reducer;