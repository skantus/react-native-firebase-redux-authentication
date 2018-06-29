import { connect } from "react-redux";
import { TodoList } from "../../components/todolist/todolist";
import { Add, Remove } from "../../actions/todolist/actions";

const mapStateToProps = ({ todolistReducer: { todos } }) => ({
  todos: todos
});

const mapDispatchToProps = {
  onAdd: Add,
  onRemove: Remove
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
