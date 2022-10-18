import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Task, NewTask } from '../utilities/types';
import TaskChart from '../components/TaskChart';
import TimerControls from '../components/TimerControls';
import TaskList from '../components/TaskList';

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
  const [workTimer, setWorkTimer] = useState<number>(0);

  const [breaking, setBreaking] = useState<boolean>(false);
  const [breakTimer, setBreakTimer] = useState<number>(0);

  const [activeTask, setActiveTask] = useState<Task>();

  useEffect(() => {
    if (working) {
      const count = setInterval(() => {
        setWorkTimer(workTimer + 1);

        if (activeTask) {
          let tempTasks = tasks;
          let index = 0;
          index = tempTasks.indexOf(activeTask);
          tempTasks[index].time += 1;
          setTasks([...tempTasks]);
        }
      }, 1000);
      return () => clearInterval(count);
    }
    if (breaking) {
      const count = setInterval(() => {
        setBreakTimer(breakTimer + 1);
      }, 1000);
      return () => clearInterval(count);
    }
  }, [working, workTimer, breaking, breakTimer]);

  return (
    <div id="timer">
      <h1>Time Tracker</h1>
      <TimerControls
        startWork={() => {
          setBreaking(false);
          setWorking(true);
        }}
        startBreak={() => {
          setWorking(false);
          setBreaking(true);
        }}
        stop={() => {
          setWorking(false);
          setBreaking(false);
        }}
        workTimer={workTimer}
        breakTimer={breakTimer}
        task={activeTask}
      />
      <TaskList
        tasks={tasks}
        task={newTask}
        handleChange={handleChange}
        add={addTask}
        setActive={(task: Task) => setActiveTask(task)}
      />
      <TaskChart tasks={tasks} mainTimer={workTimer} />
    </div>
  );
};

export default TimerPage;
