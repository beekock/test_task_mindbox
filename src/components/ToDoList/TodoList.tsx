import TaskComponent from './TaskComponent';
import TaskInput from './TaskInput';
import TaskSort from './TaskSort';
import TaskStore, { Task } from './TaskStore';
import { observer } from 'mobx-react-lite';
import React from 'react';

const TodoList = observer(() => {
  const { filteredTasks, isOpen } = TaskStore;
  return (
    <div className="shadow-xl mx-auto transition-transform duration-500 ease-in">
      <TaskInput />
      {isOpen && (
        <>
          {filteredTasks.map((task: Task, id) => (
            <React.Fragment key={`${task.title}-${id}`}>
              <TaskComponent task={task} />
            </React.Fragment>
          ))}
          <TaskSort />
        </>
      )}
    </div>
  );
});

export default TodoList;
