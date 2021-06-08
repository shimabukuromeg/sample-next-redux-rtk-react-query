// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  // refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getRepoByUseName: builder.query({
      query: (name) => `/users/${name}/repos`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRepoByUseNameQuery } = githubApi
