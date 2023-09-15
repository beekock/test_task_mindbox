import { render, fireEvent, screen } from '@testing-library/react';
import TaskInput from '../components/ToDoList/TaskInput';
import TaskStore from '../components/ToDoList/TaskStore';

jest.mock('../components/ToDoList/TaskStore', () => ({
  toggleOpen: jest.fn(),
  isOpen: false,
  addTask: jest.fn(),
}));

describe('TaskInput', () => {
  it('correct render', () => {
    render(<TaskInput />);

    const inputElement = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();

    const arrowIcon = screen.getByAltText('arrow-ico');
    expect(arrowIcon).toBeInTheDocument();
  });

  it('handles input change', () => {
    render(<TaskInput />);

    const inputElement = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'New Task' } });

    expect(inputElement.value).toBe('New Task');
  });

  it('handles Enter key press', () => {
    render(<TaskInput />);
    const inputElement = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'New task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', keyCode: 13 });
    expect(TaskStore.addTask).toHaveBeenCalledWith('New task');
    expect(inputElement.value).toBe('');
  });

  it('handles arrow icon click', () => {
    render(<TaskInput />);
    const arrowIcon = screen.getByAltText('arrow-ico');
    fireEvent.click(arrowIcon);
    expect(TaskStore.toggleOpen).toHaveBeenCalled();
  });
});
