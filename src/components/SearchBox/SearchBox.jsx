import { useSelector, useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={search}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
