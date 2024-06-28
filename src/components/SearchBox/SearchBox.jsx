import { useSelector, useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);
  return (
    <div>
      <p className={css.label}>
        Find contacts by name,lets check which one of them will say
      palyanytsya
      </p>
      <input
        className={css.input}
        type="text"
        value={search}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
