import { render, fireEvent, screen } from '@testing-library/react';
import TaskSort from '../components/ToDoList/TaskSort';
import TaskStore from '../components/ToDoList/TaskStore';

jest.mock('../components/ToDoList/TaskStore', () => ({
  clearCompleted: jest.fn(),
  setFilter: jest.fn(),
}));
describe('TaskSort', () => {
  it('should render without errors', () => {
    TaskStore.tasks = [
      { title: 'first', completed: false },
      { title: 'second', completed: true },
      { title: 'third', completed: false },
    ];
    render(<TaskSort />);
    expect(screen.getByText('Clear completed')).toBeInTheDocument();
  });

  it('should display the correct number of items left', () => {
    TaskStore.tasks = [
      { title: 'first', completed: false },
      { title: 'second', completed: true },
      { title: 'third', completed: false },
    ];
    render(<TaskSort />);
    expect(screen.getByText('2 items left')).toBeInTheDocument();
  });

  it('should handle filter button clicks', () => {
    render(<TaskSort />);

    fireEvent.click(screen.getByText('Active'));
    expect(TaskStore.setFilter).toHaveBeenCalledWith('Active');

    fireEvent.click(screen.getByText('Completed'));
    expect(TaskStore.setFilter).toHaveBeenCalledWith('Completed');

    fireEvent.click(screen.getByText('All'));
    expect(TaskStore.setFilter).toHaveBeenCalledWith('All');
  });

  it('should call clearCompleted when "Clear completed" button is clicked', () => {
    render(<TaskSort />);

    fireEvent.click(screen.getByText('Clear completed'));
    expect(TaskStore.clearCompleted).toHaveBeenCalled();
  });
});
