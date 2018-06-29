import { connect } from "react-redux";
import { Counter } from "../../components/counter/counter";
import {
  Increment,
  Decrement,
  Add,
  Subtration
} from "../../actions/counter/actions";

const mapStateToProps = ({ routes, counterReducer }) => ({
  routes: routes,
  count: counterReducer.counter,
  value: counterReducer.value
});

const mapDispatchToProps = {
  onIncrement: Increment,
  onDecrement: Decrement,
  onAdd: Add,
  onSubtraction: Subtration
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
