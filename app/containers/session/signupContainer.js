import { connect } from "react-redux";
import { SignupFormComponent } from "../../components/auth/SignupForm/signupForm";
import { signupUser } from "../../actions/session/actions";

const mapStateToProps = ({
  routes,
  sessionReducer: { loading, error, registered }
}) => ({
  routes: routes,
  loading: loading,
  error: error,
  registered: registered
});

const mapDispatchToProps = {
  signup: signupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormComponent);
