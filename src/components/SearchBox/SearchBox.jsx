import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  // console.log('filter in filters:');
  // console.log(filter);

  const onFilter = item => {
    dispatch(setFilter(item));
  };

  return (
    <div className={css.SearchBox}>
      <p className={css.label}>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
