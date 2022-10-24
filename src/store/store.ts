import { configureStore } from '@reduxjs/toolkit';
import { homeworkSlice } from './';

export const store = configureStore({
    reducer: {
        homework: homeworkSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // })
});
