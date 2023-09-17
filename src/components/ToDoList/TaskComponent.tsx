import check_ico from '../../assets/check.svg';
import clsx from 'clsx';
import TaskStore, { Task } from './TaskStore';
import { observer } from 'mobx-react-lite';

const TaskComponent = observer(({ task }: { task: Task }) => {
  const { toggleCompleted } = TaskStore;
  return (
    <div className="items-center flex py-5 h-10 md:px-7 px-4">
      <div
        className={clsx(
          task.completed
            ? 'border-completed border-opacity-100 opacity 100'
            : 'border-slate-400 border-opacity-50 opacity-50',
          'md:w-8 md:h-8 w-5 h-5 py-[4x] rounded-full border mr-3 md:mr-5 cursor-pointer flex justify-center items-center hover:bg-slate-300 transition-all',
        )}
        onClick={() => toggleCompleted(task)}
        data-testid="checkbox">
        <img
          src={check_ico}
          alt="check-ico"
          className={clsx(
            task.completed ? 'opacity-100' : 'opacity-0',
            'w-5 h-5 hover:opacity-70 transition-all duration-200 select-none',
          )}
        />
      </div>
      <span
        className={clsx(
          task.completed ? 'text-text-done line-through' : '',
          'text-center md:text-xl text-lg duration-200 transition-colors flex select-none',
        )}>
        {task.title}
      </span>
    </div>
  );
});

export default TaskComponent;
