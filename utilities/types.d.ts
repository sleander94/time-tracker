export interface Task {
  name: string;
  color: string;
  time: number;
}

export interface NewTask {
  name: string;
  color: string;
}

export interface TaskListItemProps {
  name: string;
  color: string;
  time: number;
  onClick: function;
}

export interface AddTaskProps {
  task: NewTask;
  handleChange: function;
  add: function;
}

export interface TimerControlsProps {
  start: function;
  stop: function;
  mainTimer: number;
  task: Task | undefined;
}

export interface TaskChartProps {
  tasks: Task[];
  mainTimer: number;
}
