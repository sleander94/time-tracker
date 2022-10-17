import { TaskListItemProps } from '../utilities/types';

const TaskListItem = ({ name, color, time, onClick }: TaskListItemProps) => {
  return (
    <li className="task-li" onClick={onClick}>
      <p>{name}</p>
      <p>{time}</p>
      <div
        className="color-icon"
        style={{
          backgroundColor: color,
        }}
      ></div>
    </li>
  );
};

export default TaskListItem;
