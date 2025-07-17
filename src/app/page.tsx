import TodoList from "@/components/TodoList";
import { TodoParams } from "@/interface/todo.interface";
import { makeStore, RootState } from "@/lib/store";
import { todoApi } from "@/services/todos";
import PageStoreWrapper from "./pageStoreWrapper";

async function getPageData(): Promise<{ preloadedState: Partial<RootState> }> {
  try {
    const store = makeStore();
    const params: TodoParams = {
      start: 1,
      limit: 10
    };

    await store.dispatch(todoApi.endpoints.getTodoList.initiate(params));

    const preloadedState = store.getState();
    return { preloadedState };
  } catch (error) {
    console.error('Error fetching data on server:', error);
    return { preloadedState: {} };
  }
}

export default async function Home() {
  const { preloadedState } = await getPageData();
  return (
    <PageStoreWrapper preloadedState={preloadedState}>
      <div className="font-sans grid items-center justify-items-center min-h-screen p-8 pb-0 gap-4">
        <main className="w-[600px] h-[700px] border border-gray-100 p-8 rounded-md shadow-xs flex flex-col items-center">
          <TodoList />
        </main>
        <footer className="flex gap-[24px] flex-wrap items-center justify-center">
          <p>
            &copy; Muchamad <span className="font-bold text-red-600">Mitro</span> Ubaidillah
          </p>
        </footer>
      </div>
    </PageStoreWrapper>
  );
}
