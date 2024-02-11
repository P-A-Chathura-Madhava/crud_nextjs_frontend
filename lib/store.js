import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/lib/features/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})