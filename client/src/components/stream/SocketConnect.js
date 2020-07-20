import {useEffect} from 'react';
import {connect} from 'react-redux';
import {joinChat} from 'actions/socket';

const SocketConnect = ({join, slug}) => {
  useEffect(() => {
    join(slug);
  }, [slug])
  return null;
}

const mapStateToProps = (state) => {
  return {
    slug: state.page.id,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    join: (slug) => dispatch(joinChat({slug: slug})),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SocketConnect);