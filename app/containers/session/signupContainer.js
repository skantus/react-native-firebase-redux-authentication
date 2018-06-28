import { connect } from 'react-redux';
import { SignupFormComponent } from '../../components/auth/SignupForm/signupForm';
import { signupUser } from '../../actions/session/actions';

const mapStateToProps = state => ({
  routes: state.routes,
  loading: state.sessionReducer.loading,
  error: state.sessionReducer.error,
  registered: state.sessionReducer.registered
});

const mapDispatchToProps = {
  signup: signupUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormComponent);
