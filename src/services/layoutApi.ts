import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // the React-specific entry point to import createApi
import { Layout } from '../model';

const baseApiUrl = 'http://localhost:3004/';

const layoutQueryObj = {
  query: (pathname: string) => {
    return pathname;
  },
  transformResponse: (responseData: Layout): Layout => {
    console.log('RTK Query');
    console.log(responseData);
    return responseData;
  },
};

// Define a service using a base URL and expected endpoints
export const layoutApi = createApi({
  reducerPath: 'layoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  endpoints: (builder) => ({
    getLayoutByPath: builder.query<Layout, string>(layoutQueryObj),
  }),
});

export const { useGetLayoutByPathQuery } = layoutApi;
