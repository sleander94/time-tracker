import { TimerControlsProps } from '../utilities/types';

const TimerControls = ({
  start,
  stop,
  mainTimer,
  task,
}: TimerControlsProps) => {
  return (
    <div id="timer-controls">
      <h1>Timer</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <p>Main: {mainTimer}</p>
      <p>{task?.name}</p>
      <p>Active: {task?.time}</p>
    </div>
  );
};

export default TimerControls;
