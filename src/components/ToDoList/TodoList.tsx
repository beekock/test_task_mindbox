import { useRef } from 'react';
import TaskComponent from './TaskComponent';
import TaskInput from './TaskInput';
import TaskSort from './TaskSort';
import TaskStore, { Task } from './TaskStore';
import { observer } from 'mobx-react-lite';
import React from 'react';

const TodoList = observer(() => {
  const { filteredTasks, isOpen } = TaskStore;
  const parent = useRef(null);
  return (
    <div className="shadow-md mx-auto ">
      <TaskInput />
      {isOpen && (
        <div ref={parent}>
          {' '}
          {filteredTasks.map((task: Task) => (
            <React.Fragment key={task.title}>
              <TaskComponent task={task} />
            </React.Fragment>
          ))}
          <TaskSort />
        </div>
      )}
    </div>
  );
});

export default TodoList;
