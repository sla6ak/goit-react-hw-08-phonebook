import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: token => ({
        url: `/contacts/`,
        method: 'GET',
        header: `${token}`,
      }),
      providesTags: ['Contact'], //тут мы создаем провайдер с ключем за которым необходимо следить
    }),

    deletedContact: builder.mutation({
      query: (token, id) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
        header: `${token}`,
      }),
      invalidatesTags: ['Contact'], // тут мы следим за ключем (эти ключи к кешу где нужно перефечивать данные)
    }),

    addContact: builder.mutation({
      query: (token, newContact) => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
        header: `${token}`,
      }),
      invalidatesTags: ['Contact'],
    }),
    //     {
    //   "name": "Jacob Mercer",
    //   "number": "761-23-96"
    // }
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllContactsQuery,
  useDeletedContactMutation,
  useAddContactMutation,
} = contactApi;
