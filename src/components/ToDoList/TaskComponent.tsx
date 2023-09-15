import check_ico from '../../assets/check.svg';
import clsx from 'clsx';
import TaskStore, { Task } from './TaskStore';
import { observer } from 'mobx-react-lite';

const TaskComponent = observer(({ task }: { task: Task }) => {
  const { toggleCompleted } = TaskStore;
  return (
    <div className="items-center flex py-5 px-9 h-10">
      <div
        className={clsx(
          task.completed
            ? 'border-completed border-opacity-100 opacity 100'
            : 'border-slate-400 border-opacity-50 opacity-50',
          'w-8 h-8 rounded-full border   mr-7 cursor-pointer flex justify-center items-center hover:bg-slate-300 transition-colors',
        )}
        onClick={() => toggleCompleted(task)}
        data-testid="checkbox">
        <img
          src={check_ico}
          alt="check-ico"
          className={clsx(
            task.completed ? 'opacity-100' : 'opacity-0',
            'w-5 h-5 hover:opacity-70 transition-opacity',
          )}
        />
      </div>
      <span
        className={clsx(
          task.completed ? 'text-text-done line-through' : '',
          'text-center text-xl',
        )}>
        {task.title}
      </span>
    </div>
  );
});

export default TaskComponent;
