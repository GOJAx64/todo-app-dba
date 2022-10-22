import { configureStore } from '@reduxjs/toolkit';
import { todoAppSlice } from './';

export const store = configureStore({
    reducer: {
        calendar: todoAppSlice.reducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // })
});
