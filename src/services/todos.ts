import type { CreateTodoRequest, TodoParams, TodoResponse } from '@/interface/todo.interface';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://jsonplaceholder.typicode.com';

// eslint-disable-next-line 
type RootState = any;

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  // eslint-disable-next-line
  extractRehydrationInfo (action, { reducerPath }):any {
    if(isHydrateAction(action)) {
      return action.payload[reducerPath];
    }

    return undefined;
  },
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodoList: builder.query<TodoResponse[], TodoParams>({
      query: (params) => `todos?_start=${params.start}&_limit=${params.limit}`,
      providesTags: ['Todo'],
    }),
    createTodo: builder.mutation<TodoResponse, CreateTodoRequest>({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo
      }),
      invalidatesTags: ['Todo'],
    })
  })
});

export const { useGetTodoListQuery, useCreateTodoMutation } = todoApi;