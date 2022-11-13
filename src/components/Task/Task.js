import { MdClose } from 'react-icons/md';
import { removeTask, toggleCompleted } from 'redux/tasks/slice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import css from './Task.module.css';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={e => {
          dispatch(toggleCompleted(task.id));
        }}
      />
      <p className={css.text}>{task.text}</p>
      <button
        className={css.btn}
        onClick={() => {
          dispatch(removeTask(task.id));
        }}
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};
