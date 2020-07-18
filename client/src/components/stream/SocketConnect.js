import {useEffect} from 'react';
import {connect} from 'react-redux';
import {joinChat} from 'actions/socket';

const SocketConnect = ({join, send, setName}) => {
  useEffect(() => {
    join();
  }, [])
  return null;
}

const mapDispatchToProps = (dispatch) => {
  return {
    join: () => dispatch(joinChat()),
  };
};


export default connect(null, mapDispatchToProps)(SocketConnect);