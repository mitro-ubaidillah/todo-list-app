
const Loading = () => {
  return (
    <div className="animate-pulse h-[700px] w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8">Todo List App</h1>
        <div className="flex gap-2">
          <div className="w-[300px] h-8 bg-gray-300 rounded-md" />
          <div className="w-[70px] h-8 bg-gray-300 rounded-md" />
        </div>
        <div className="flex flex-col gap-y-2 mt-8 w-full">
        {
          Array.from({ length: 5 }).map((_, idx) => (
            <div className="border flex justify-between items-center rounded-lg border-gray-200 shadow-xs py-3 px-6" key={idx}>
              <div className="flex flex-col space-y-1">
                <div className="h-6 w-[200px] bg-gray-300 rounded" />
                <div className="h-4 w-[100px] bg-gray-300 rounded" />
              </div>
              <div className="h-6 w-6 bg-gray-300 rounded" />
            </div>
          ))
        }
        </div>
        <div className="flex justify-end gap-4 w-full mt-5">
          <div className="w-[50px] h-[32px] bg-gray-300 rounded" />
          <div className="flex gap-1">
            {
              Array.from({ length: 3 }).map((_, idx) => (
                <div className="w-[40px] h-[32px] bg-gray-300 rounded" key={idx} />
              ))
            }
          </div>
          <div className="w-[50px] h-[32px] bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  )
}

export default Loading;