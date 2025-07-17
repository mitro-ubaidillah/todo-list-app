import { TodoResponse } from "@/interface/todo.interface";

interface TodoItemProps {
  data: TodoResponse;
}

const TodoItem = ({ data }: TodoItemProps) => {
  return (
    <div className="rounded-lg border border-gray-200 shadow-xs py-1 px-6 flex justify-between items-center">
      <div className="flex flex-col gap-[2px]">
        <h3 className="font-bold text-neutral-900">{data.title}</h3>
        <p className="text-xs text-neutral-500">User ID: {data.userId}</p>
      </div>
      <span>
        {
          data.completed ?
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          :
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      </span>
    </div>
  )
}

export default TodoItem;