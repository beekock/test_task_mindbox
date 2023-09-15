import { ITaskStore, TaskStore } from '../components/ToDoList/TaskStore';

let taskStore: ITaskStore;
beforeEach(() => {
  taskStore = new TaskStore();
});

test('addTask should add a new task', () => {
  const initialTaskCount = taskStore.tasks.length;
  taskStore.addTask('New Task');
  expect(taskStore.tasks.length).toBe(initialTaskCount + 1);
  expect(taskStore.tasks[initialTaskCount].title).toBe('New Task');
  expect(taskStore.tasks[initialTaskCount].completed).toBe(false);
});

test('toggleOpen should toggle isOpen', () => {
  const initialIsOpen = taskStore.isOpen;
  taskStore.toggleOpen();
  expect(taskStore.isOpen).toBe(!initialIsOpen);
});

test('filteredTasks should return tasks based on filter', () => {
  taskStore.tasks = [
    { title: 'Task 1', completed: false },
    { title: 'Task 2', completed: true },
    { title: 'Task 3', completed: false },
  ];

  taskStore.setFilter('All');
  expect(taskStore.filteredTasks.length).toBe(3);

  taskStore.setFilter('Completed');
  expect(taskStore.filteredTasks.length).toBe(1);

  taskStore.setFilter('Active');
  expect(taskStore.filteredTasks.length).toBe(2);
});

test('setFilter should set the filter', () => {
  taskStore.setFilter('Completed');
  expect(taskStore.filter).toBe('Completed');

  taskStore.setFilter('Active');
  expect(taskStore.filter).toBe('Active');

  taskStore.setFilter('All');
  expect(taskStore.filter).toBe('All');
});

test('clearCompleted should remove completed tasks', () => {
  taskStore.tasks = [
    { title: 'Task 1', completed: false },
    { title: 'Task 2', completed: true },
    { title: 'Task 3', completed: true },
  ];

  taskStore.clearCompleted();
  expect(taskStore.tasks.length).toBe(1);
  expect(taskStore.tasks[0].title).toBe('Task 1');
});

test('toggleCompleted should toggle the completed status of a task', () => {
  taskStore.tasks = [
    { title: 'Task 1', completed: false },
    { title: 'Task 2', completed: true },
    { title: 'Task 3', completed: false },
  ];

  taskStore.toggleCompleted(taskStore.tasks[0]);
  expect(taskStore.tasks[0].completed).toBe(true);

  taskStore.toggleCompleted(taskStore.tasks[2]);
  expect(taskStore.tasks[2].completed).toBe(true);
});
