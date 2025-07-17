'use client'

import { CreateTodoRequest } from "@/interface/todo.interface";
import { useState } from "react";

interface TodoFormProps {
  handleSubmit: (data: CreateTodoRequest) => void;
  isLoading?: boolean;
}

const TodoForm = ({ handleSubmit, isLoading }: TodoFormProps) => {
  const [data, setData] = useState<CreateTodoRequest>({
    complete: false,
    title: "",
    userId: null
  });

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const randomId = new Date().getTime();

    setData((prev) => ({
      ...prev,
      title: value,
      userId: randomId
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    handleSubmit(data);
  }

  return (
    <form className="flex gap-1" onSubmit={onSubmit}>
      <input 
        type="text" 
        className="border border-gray-400 rounded-sm h-[32px] min-w-[300px] px-2" 
        value={data.title} 
        onChange={handleChangeTitle} 
        required
      />
      <button 
        type="submit" 
        className="bg-blue-500 rounded-sm px-4 h-[32px] text-white font-medium cursor-pointer"
        disabled={isLoading}
      >
        { isLoading ? "Loading..." : "Add"}
      </button>
    </form>
  )
}

export default TodoForm;