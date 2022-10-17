import { TaskChartProps } from '../utilities/types';
import { PieChart } from 'react-minimal-pie-chart';

const TaskChart = ({ tasks, mainTimer }: TaskChartProps) => {
  return (
    <PieChart
      style={{ maxWidth: '500px', maxHeight: '500px' }}
      data={tasks.map((task) => {
        return { title: task.name, value: task.time, color: task.color };
      })}
      label={(task) => {
        if (task.dataEntry.value > 0) {
          return `${Math.floor((task.dataEntry.value / mainTimer) * 100)}%`;
        }
      }}
    />
  );
};

export default TaskChart;
