import { connect } from "react-redux";
import { Home } from "../../components/home/home";

import { logoutUser } from "../../actions/session/actions";

const mapStateToProps = ({ routes, sessionReducer }) => ({
  routes: routes,
  user: sessionReducer.user
});

const mapDispatchToProps = {
  logout: logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
