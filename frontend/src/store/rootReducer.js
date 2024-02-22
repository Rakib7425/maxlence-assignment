import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import themeReducer from "./slices/themeSlice";

const rootReducer = combineReducers({
	user: userReducer,
	theme: themeReducer,
});

export default rootReducer;
