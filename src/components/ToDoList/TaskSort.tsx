import TaskStore from './TaskStore';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';

const TaskSort = observer(() => {
  const { tasks, filter, setFilter, clearCompleted } = TaskStore;
  return (
    <div className="flex py-2 md:px-5 px-1 items-center justify-between md:text-md text-sm text-text-sort mt-10">
      <span>{`${tasks.filter((task) => !task.completed).length} items left`}</span>
      <div className="flex justify-between">
        <button
          className={clsx(filter === 'All' && 'border border-border-sort rounded-sm', 'px-2')}
          onClick={() => setFilter('All')}>
          All
        </button>
        <button
          className={clsx(filter === 'Active' && 'border border-border-sort rounded-sm', 'px-2')}
          onClick={() => setFilter('Active')}>
          Active
        </button>
        <button
          className={clsx(filter === 'Completed' && 'border border-border-sort rounded-sm', 'px-2')}
          onClick={() => setFilter('Completed')}>
          Completed
        </button>
      </div>
      <button onClick={() => clearCompleted()}>Clear completed</button>
    </div>
  );
});

export default TaskSort;
