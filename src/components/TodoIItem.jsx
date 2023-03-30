import { useDispatch } from "react-redux";
import { toggleTodoComplete,removeTodo } from "../store/todoSlice";

const TodoItem = ({ text, id, completed }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({ id }))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};
export default TodoItem ;
