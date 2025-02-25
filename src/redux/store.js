import { configureStore } from '@reduxjs/toolkit';
import { deezerApi } from './apiCalls';

export const store = configureStore({
    reducer: {
        [deezerApi.reducerPath]: deezerApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(deezerApi.middleware),
})

