import { render, fireEvent, screen } from '@testing-library/react';

import TaskComponent from '../components/ToDoList/TaskComponent';
import TaskStore from '../components/ToDoList/TaskStore';

jest.mock('../components/ToDoList/TaskStore', () => ({
  toggleCompleted: jest.fn(),
}));

describe('TaskComponent', () => {
  it('should display the task title', () => {
    const task = { title: 'Test Task', completed: false };
    render(<TaskComponent task={task} />);
    const taskTitleElement = screen.getByText('Test Task');
    expect(taskTitleElement).toBeInTheDocument();
  });

  it('should display the correct CSS classes for an incomplete task', () => {
    const task = { title: 'Test Task', completed: false };
    render(<TaskComponent task={task} />);
    const taskContainer = screen.getByRole('img', { name: 'check-ico' });
    expect(taskContainer).toHaveClass('opacity-0 w-5 h-5 hover:opacity-70 transition-opacity');
  });

  it('should display the correct CSS classes for a completed task', () => {
    const task = { title: 'Test Task', completed: true };
    render(<TaskComponent task={task} />);
    const taskContainer = screen.getByRole('img', { name: 'check-ico' });
    expect(taskContainer).toHaveClass('opacity-100 w-5 h-5 hover:opacity-70 transition-opacity');
  });

  it('should call the toggleCompleted function when clicked', () => {
    const task = { title: 'Test Task', completed: false };
    render(<TaskComponent task={task} />);
    const taskContainer = screen.getByTestId('checkbox');
    fireEvent.click(taskContainer);
    expect(TaskStore.toggleCompleted).toHaveBeenCalledWith(task);
  });
});
