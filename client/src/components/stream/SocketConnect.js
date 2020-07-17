import {useEffect} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import {joinChat} from 'actions/socket';

const SocketConnect = ({join}) => {
  useEffect(() => {
    join();
  }, [])
  /*
  useEffect(() => {

    const socket = io('https://api.bb.johnpyp.net/socket.io');

    socket.on('connect', () => {
      socket.emit("joinChat", {"query": 'SystemNameUntil'});
    });
    socket.emit("setUsername", {
      slug: 'SystemNameUntil',
      username: 'bob'
    });

    socket.emit("chat", {
      slug: 'SystemNameUntil',
      message: 'ooooooooooooooooooo'
    });

  socket.on('chat', (res) => {
    console.log('chaaaaaaaaaaaaat');
    if (res) {
     // receiveMessage(res);
    }
  });

  }, []);
  */
  return null;
}

const mapDispatchToProps = (dispatch) => {
  return {
    join: () => dispatch(joinChat())
  };
};


export default connect(null, mapDispatchToProps)(SocketConnect);