import { useEffect, useState } from 'react';
import { Task } from '../utilities/types';
import TaskListItem from './TaskListItem';

const TimerSetup = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState<Task>({ name: '', color: '#000' });

  const handleChange = (value: string, key: string) => {
    let tempTask = newTask;
    tempTask[key] = value;
    setNewTask({ ...tempTask });
  };

  const addTask = (task: Task) => {
    let tempTasks = tasks;
    tempTasks.push(task);
    setTasks(tempTasks);
    setNewTask({ name: '', color: '#000' });
  };

  return (
    <section id="timer-setup">
      <h1>New Task</h1>
      <ol>
        {tasks.map((task) => {
          return <TaskListItem name={task.name} color={task.color} />;
        })}
      </ol>
      <div>
        <input onChange={(e) => handleChange(e.target.value, 'name')}></input>
        <input
          type="color"
          onChange={(e) => handleChange(e.target.value, 'color')}
        ></input>
        <button onClick={() => addTask(newTask)}>Add +</button>
      </div>
    </section>
  );
};

export default TimerSetup;
