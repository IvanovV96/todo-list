import css from './TaskCounter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getTasks } from 'redux/selectors/selectors';
export const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const count = tasks.reduce(
    (acc, task) => {
      task.completed ? (acc.completed += 1) : (acc.active += 1);
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
