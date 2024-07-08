import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import courseReducer from './slices/courseSlice';
import lectureReducer from './slices/lectureSlice';
import razorpayReducer from './slices/razorPaySlice';
import statSliceReducer from './slices/statsSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        course: courseReducer,
        razorpay: razorpayReducer,
        lecture: lectureReducer,
        stat: statSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;