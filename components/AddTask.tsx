import { AddTaskProps } from '../utilities/types';

const AddTask = ({ task, handleChange, add }: AddTaskProps) => {
  return (
    <div id="add-task">
      <h2>New Task</h2>
      <div>
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
    </div>
  );
};

export default AddTask;
