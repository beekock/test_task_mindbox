import { action, computed, makeObservable, observable } from 'mobx';

export type Task = {
  title: string;
  completed: boolean;
};
export interface ITaskStore {
  tasks: Task[];
  filter: FilterType;
  isOpen: boolean;
  addTask: (title: string) => void;
  toggleOpen: () => void;
  filteredTasks: Task[];
  setFilter: (filter: FilterType) => void;
  clearCompleted: () => void;
  toggleCompleted: (task: Task) => void;
}
export type FilterType = 'All' | 'Completed' | 'Active';

export class TaskStore {
  @observable tasks: Task[] = [
    { title: 'Тестовое задание', completed: false },
    { title: 'Прекрасный код', completed: true },
    { title: 'Покрытие тестами', completed: false },
  ];
  @observable filter: FilterType = 'All';
  @observable isOpen: boolean = true;

  constructor() {
    makeObservable(this);
  }

  // computeds
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

  // actions
  @action addTask = (title: string) => {
    this.tasks = [...this.tasks, { title, completed: false }];
  };
  @action toggleOpen = () => {
    this.isOpen = !this.isOpen;
  };

  @action setFilter = (filter: FilterType) => {
    this.filter = filter;
  };
  @action clearCompleted = () => {
    this.tasks = this.tasks.filter((task) => !task.completed);
  };
  @action toggleCompleted = (task: Task) => {
    task.completed = !task.completed;
  };
}

export default new TaskStore();
