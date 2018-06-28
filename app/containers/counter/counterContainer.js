import { connect } from 'react-redux';
import { Counter } from '../../components/counter/counter';
import { Increment, Decrement, Add, Subtration} from '../../actions/counter/actions';

const mapStateToProps = state => ({
  routes: state.routes,
  count: state.counterReducer.counter,
  value: state.counterReducer.value,
});

const mapDispatchToProps = {
  onIncrement: Increment,
  onDecrement: Decrement,
  onAdd: Add,
  onSubtraction: Subtration
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
