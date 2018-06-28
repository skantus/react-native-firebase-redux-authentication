import { connect } from 'react-redux';
import { Search } from '../../components/search/search';

const mapStateToProps = ({ routes }) => ({ routes });
export default connect(mapStateToProps)(Search);
