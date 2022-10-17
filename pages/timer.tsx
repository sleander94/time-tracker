import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Task, NewTask } from '../utilities/types';
import TaskListItem from '../components/TaskListItem';
import TaskChart from '../components/TaskChart';
import TimerControls from '../components/TimerControls';
import AddTask from '../components/AddTask';

const TimerPage: NextPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState<NewTask>({
    name: '',
    color: '#000000',
  });

  const handleChange = (value: string, key: keyof NewTask) => {
    let tempTask = newTask;
    tempTask[key] = value;
    setNewTask({ ...tempTask });
  };

  const addTask = (newTask: NewTask) => {
    let tempTasks = tasks;
    let task = { name: newTask.name, color: newTask.color, time: 0 } as Task;
    tempTasks.push(task);
    setTasks([...tempTasks]);
    setActiveTask(task);
    setNewTask({ name: '', color: '#000000' });
  };

  const [working, setWorking] = useState<boolean>(false);
  const [mainTimer, setMainTimer] = useState<number>(0);
  const [activeTimer, setActiveTimer] = useState<number>(0);
  const [activeTask, setActiveTask] = useState<Task>();

  useEffect(() => {
    if (working) {
      const count = setInterval(() => {
        setMainTimer(mainTimer + 1);

        let tempTasks = tasks;
        let index = 0;
        if (activeTask) index = tempTasks.indexOf(activeTask);
        tempTasks[index].time += 1;
        setTasks([...tempTasks]);
      }, 1000);
      return () => clearInterval(count);
    }
  }, [working, mainTimer]);

  return (
    <div id="timer">
      <h1>My Tasks</h1>
      <ol>
        {Object.values(tasks).map((task) => {
          return (
            <TaskListItem
              key={task.name}
              name={task.name}
              color={task.color}
              time={task.time}
              onClick={() => setActiveTask(task)}
            />
          );
        })}
      </ol>
      <AddTask task={newTask} handleChange={handleChange} add={addTask} />
      <TimerControls
        start={() => setWorking(true)}
        stop={() => setWorking(false)}
        mainTimer={mainTimer}
        task={activeTask}
      />
      <TaskChart tasks={tasks} mainTimer={mainTimer} />
    </div>
  );
};

export default TimerPage;
