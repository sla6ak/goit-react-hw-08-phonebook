import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginUserApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  endpoints: builder => ({
    registrationUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
      }),
      providesTags: ['User'],
    }),
    //     {
    //   "name": "Adrian Cross",
    //   "email": "across@mail.com",
    //   "password": "examplepassword"
    // }

    loginUser: builder.mutation({
      query: userData => ({
        url: `/users/login`,
        method: 'POST',
        body: userData,
      }),
      providesTags: ['User'],
    }),
    //     {
    //   "email": "string",
    //   "password": "string"
    // }

    unLoginUser: builder.mutation({
      query: token => ({
        url: `/users/login`,
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useRegistrationUserMutation,
  useLoginUserMutation,
  useUnLoginUserMutation,
} = loginUserApi;
