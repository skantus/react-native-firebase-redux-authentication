import { connect } from 'react-redux';
import { LoginFormComponent } from '../../components/auth/LoginForm/loginForm';
import { loginUser, restoreSession } from '../../actions/session/actions';

const mapStateToProps = state => ({
  routes: state.routes,
  restoring: state.sessionReducer.restoring,
  loading: state.sessionReducer.loading,
  user: state.sessionReducer.user,
  error: state.sessionReducer.error,
  logged: state.sessionReducer.logged
});

const mapDispatchToProps = {
  login: loginUser,
  restore: restoreSession
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);
