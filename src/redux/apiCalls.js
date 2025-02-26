import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const deezerApi = createApi({
    reducerPath: 'deezerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://deezerdevs-deezer.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '9ef895095cmshbc4564b52cb65e5p155f09jsn5a69d6883e0e');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSearch: builder.query({
            query: (queryString) => `/search?q=${queryString}`
        }),
    })
});

export const {
    useGetSearchQuery,
} = deezerApi;