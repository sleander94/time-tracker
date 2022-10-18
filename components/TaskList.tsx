import { TaskListProps } from '../utilities/types';
import TaskListItem from './TaskListItem';

const TaskList = ({
  tasks,
  task,
  handleChange,
  add,
  setActive,
}: TaskListProps) => {
  return (
    <div id="task-list">
      <h2>Tasks</h2>
      <div id="new-task">
        <input
          value={task.name}
          onChange={(e) => handleChange(e.target.value, 'name')}
        ></input>
        <input
          type="color"
          value={task.color}
          onChange={(e) => handleChange(e.target.value, 'color')}
        ></input>
        <button onClick={() => add(task)}>Add +</button>
      </div>
      <ol>
        {Object.values(tasks).map((task) => {
          return (
            <TaskListItem
              key={task.name}
              name={task.name}
              color={task.color}
              time={task.time}
              onClick={() => setActive(task)}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default TaskList;
