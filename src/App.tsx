import TodoList from './components/ToDoList/TodoList';

function App() {
  return (
    <div className="max-w-[960px] mx-auto my-0 shadow-lg rounded-md min-h-screen bg-bg-primary p-5">
      <h1 className="pt-[50px] text-6xl text-text-primary">todos</h1>
      <TodoList />
    </div>
  );
}

export default App;
