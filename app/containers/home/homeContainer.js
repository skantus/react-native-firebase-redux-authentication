import { connect } from 'react-redux';
import { Home } from '../../components/home/home';

import { logoutUser } from '../../actions/session/actions';

const mapStateToProps = state => ({
  routes: state.routes,
  user: state.sessionReducer.user,
});

const mapDispatchToProps = {
  logout: logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
