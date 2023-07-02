import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="flex justify-center py-4">
      <h1 className="font-bold text-5xl">Todo App</h1>
      <TodoList />
    </main>
  )
}
