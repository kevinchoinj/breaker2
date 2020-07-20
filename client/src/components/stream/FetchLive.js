import {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {fetchLive} from 'actions/data';

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

const SocketConnect = ({checkLive, slug}) => {

  useInterval(() => {
    if (slug) {
      checkLive(slug);
    }
  }, 5000);

  useEffect(() => {
    if (slug) {
      checkLive(slug)
    }
  }, [slug]);

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