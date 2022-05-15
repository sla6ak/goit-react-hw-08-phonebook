import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    //тут я создаю базовый хедерс для всех запросов вытягивая токен из стейта на любой глубине.
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['contact'],

  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => ({
        url: `/contacts/`,
        method: 'GET',
      }),
      providesTags: ['contact'], //тут мы создаем провайдер с ключем за которым необходимо следить
    }),

    deletedContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contact'], // тут мы следим за ключем (эти ключи к кешу где нужно перефечивать данные)
    }),

    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['contact'],
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
