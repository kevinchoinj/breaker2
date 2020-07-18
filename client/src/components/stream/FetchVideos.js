import {useEffect} from 'react';
import {fetchVideos} from 'actions/data';
import {connect} from 'react-redux';

const FetchVideos = ({fetchVideosAction, slug}) => {
  useEffect(() => {
    fetchVideosAction(slug)
  },[slug]);
  return null;
};

const mapStateToProps = (state) => {
  return {
    slug: state.page.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideosAction: (slug) => dispatch(fetchVideos(slug)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchVideos);
