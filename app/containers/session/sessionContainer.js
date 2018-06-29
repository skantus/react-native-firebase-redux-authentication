import { connect } from "react-redux";
import { LoginFormComponent } from "../../components/auth/LoginForm/loginForm";
import { loginUser, restoreSession } from "../../actions/session/actions";

const mapStateToProps = ({
  routes,
  sessionReducer: { restoring, loading, user, error, logged }
}) => ({
  routes: routes,
  restoring: restoring,
  loading: loading,
  user: user,
  error: error,
  logged: logged
});

const mapDispatchToProps = {
  login: loginUser,
  restore: restoreSession
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);
