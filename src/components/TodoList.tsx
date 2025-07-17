'use client'

import { CreateTodoRequest } from "@/interface/todo.interface";
import { todoApi } from "@/services/todos";
import { Fragment, useState } from "react";
import Loading from "./Loading";
import Pagination from "./Pagination";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [start, setStart] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const { useGetTodoListQuery, useCreateTodoMutation } = todoApi;

  const { data, isLoading, isFetching, isError, error } = useGetTodoListQuery({
    start: start,
    limit: limit
  });

  const [createTodo, { isLoading: isAdding }] = useCreateTodoMutation();

  const handleAddTodo = async (data: CreateTodoRequest) => {
    if (data) {
      try {
        await createTodo(data).unwrap();
      } catch (err) {
        console.error("Failed to add todo: ", err);
      }
    }
  }

  return isLoading || isFetching ?
  <Loading />
  :
  (
    <Fragment>
      <h1 className="text-4xl font-bold text-neutral-900 mb-8">Todo List App</h1>
      <TodoForm handleSubmit={handleAddTodo} isLoading={isLoading || isFetching || isAdding} />
      {
        isError || error ?
        <span>Unable to connect to the server. Please check your internet connection.</span>
        :
        <div className="w-full flex flex-col gap-2 mt-10 max-h-[500px] overflow-auto">
          {
            data?.map((item, idx) => (
              <TodoItem 
                data={item} 
                key={idx} 
              />
            ))
          }
        </div>
      }
      <Pagination
        start={start}
        limit={limit}
        onChangePage={setStart}
        onChangeRow={setLimit}
      />
    </Fragment>
  ) 
}
