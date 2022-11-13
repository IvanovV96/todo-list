import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { statusFilters } from 'redux/constants/constants';
import { getFilter } from 'redux/selectors/selectors';
import { setStatusFilter } from 'redux/filter/slice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

export const StatusFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
