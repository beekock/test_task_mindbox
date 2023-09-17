import TodoList from './components/ToDoList/TodoList';

function App() {
  return (
    <div className="max-w-[960px] mx-auto my-0 shadow-lg rounded-md min-h-screen bg-bg-primary md:p-5 p-2">
      <h1 className="pt-[50px] text-6xl text-header">todos</h1>
      <TodoList />
    </div>
  );
}

export default App;
