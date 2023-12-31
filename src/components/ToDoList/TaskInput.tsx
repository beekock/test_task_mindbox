import React, { useState } from 'react';
import arrow_ico from '../../assets/arrow-down.svg';
import TaskStore from './TaskStore';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
const TaskInput: React.FC = observer(() => {
  const { toggleOpen, isOpen, addTask } = TaskStore;
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="my-5 md:px-9 p-3 flex items-center justify-start mx-auto focus:outline-none focus-visible:outline-none ">
      <img
        src={arrow_ico}
        alt="arrow-ico"
        className={clsx(
          isOpen ? '' : 'rotate-180',
          'w-4 h-4 md:mr-5 mr-1 cursor-pointer transition-transform',
        )}
        onClick={() => toggleOpen()}
      />
      <input
        type="text"
        placeholder="What needs to be done?"
        className="bg-bg-primary px-2 md:text-2xl text-xl"
        onChange={handleInputChange}
        onKeyDown={handleSubmit}
        value={inputValue}
      />
    </div>
  );
});

export default TaskInput;
