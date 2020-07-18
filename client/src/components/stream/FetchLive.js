import {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchLive} from 'actions/data';

const SocketConnect = ({checkLive, slug}) => {
  useEffect(() => {
    if (slug) {
      checkLive(slug)
    }
  },[slug]);
  return null;
}

const mapStateToProps = (state) => {
  return {
    slug: state.page.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkLive: (slug) => dispatch(fetchLive(slug)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SocketConnect);