import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: null,
    },
    reducers: {
        getUser: (state, action) => {
            state.userDetails = action.payload;
        },
    },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
