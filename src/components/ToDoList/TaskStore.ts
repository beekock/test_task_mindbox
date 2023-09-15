import { action, computed, makeObservable, observable } from 'mobx';

export type Task = {
  title: string;
  completed: boolean;
};
export interface ITaskStore {
  tasks: Task[];
  filter: string;
  isOpen: boolean;
  addTask: (title: string) => void;
  toggleOpen: () => void;
  filteredTasks: Task[];
  setFilter: (filter: string) => void;
  clearCompleted: () => void;
  toggleCompleted: (task: Task) => void;
}
export class TaskStore {
  @observable tasks: Task[] = [
    { title: 'Тестовое задание', completed: false },
    { title: 'Прекрасный код', completed: true },
    { title: 'Покрытие тестами', completed: false },
  ];
  @observable filter: string = 'All';
  @observable isOpen: boolean = true;

  constructor() {
    makeObservable(this);
  }
  @action addTask = (title: string) => {
    this.tasks = [...this.tasks, { title, completed: false }];
  };
  @action toggleOpen = () => {
    this.isOpen = !this.isOpen;
  };
  @computed get filteredTasks() {
    switch (this.filter) {
      case 'All':
        return this.tasks;
      case 'Completed':
        return this.tasks.filter((task) => task.completed);
      case 'Active':
        return this.tasks.filter((task) => !task.completed);
      default:
        return this.tasks;
    }
  }
  @action setFilter = (filter: string) => {
    this.filter = filter;
  };
  @action clearCompleted = () => {
    this.tasks = this.tasks.filter((task) => !task.completed);
  };
  @action toggleCompleted = (task: Task) => {
    const index = this.tasks.findIndex((val) => task.title === val.title);
    if (index !== -1) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }
  };
}

export default new TaskStore();
