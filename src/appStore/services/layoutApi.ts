import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_SERVER_BASE_URL, API_SERVER_PORT } from '../../constants/serverConstants';

import { Layout } from '../../model';

const baseApiUrl = `${API_SERVER_BASE_URL}:${API_SERVER_PORT}`;

const layoutQueryObj = {
  query: (pathname: string) => {
    return pathname;
  },
  transformResponse: (responseData: Layout): Layout => {
    return responseData;
  },
};

export const layoutApi = createApi({
  reducerPath: 'layoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseApiUrl }),
  endpoints: (builder) => ({
    getLayoutByPath: builder.query<Layout, string>(layoutQueryObj),
  }),
});

export const { useGetLayoutByPathQuery } = layoutApi;
