import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { serverAxios } from "../utils/axios";

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const personApi = createApi({
  reducerPath: "personApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPerson: builder.query<User[], void>({
        queryFn: async () => await serverAxios.get('posts')
    }),
  }),
});

export const { useGetPersonQuery } = personApi
