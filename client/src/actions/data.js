export const FETCH_VIDEOS_STARTED = Symbol('FETCH_VIDEOS_STARTED');
export const FETCH_VIDEOS_SUCCEEDED = Symbol('FETCH_VIDEOS_SUCCEEDED');
export const FETCH_VIDEOS_FAILURE = Symbol('FETCH_VIDEOS_FAILURE');

export const FETCH_LIVE_STARTED = Symbol('FETCH_LIVE_STARTED');
export const FETCH_LIVE_SUCCEEDED = Symbol('FETCH_LIVE_SUCCEEDED');
export const FETCH_LIVE_FAILURE = Symbol('FETCH_LIVE_FAILURE');
export const FETCH_LIVE_FALSE = Symbol('FETCH_LIVE_FALSE');

const fetchVideosStarted = request => ({type: FETCH_VIDEOS_STARTED, request});
const fetchVideosSucceeded = data => ({type: FETCH_VIDEOS_SUCCEEDED, data});
const fetchVideosFailure = (data, error) => ({type: FETCH_VIDEOS_FAILURE, data, error});

const fetchLiveStarted = request => ({type: FETCH_LIVE_STARTED, request});
const fetchLiveSucceeded = data => ({type: FETCH_LIVE_SUCCEEDED, data});
const fetchLiveFailure = (data, error) => ({type: FETCH_LIVE_FAILURE, data, error});
const fetchLiveFalse = (data, error) => ({type: FETCH_LIVE_FALSE, data, error});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function getVideos(slug) {
  return () => {
    return fetch(`https://api.bb.johnpyp.net/vods/${slug}`);
  };
}
export function fetchVideos(slug) {
  return (dispatch) => {
    dispatch(fetchVideosStarted());
    return dispatch(getVideos(slug))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchVideosSucceeded(json));
      })
      .catch(error => dispatch(fetchVideosFailure(error)));
  };
}

function getLive(slug) {
  return () => {
    return fetch(`https://api.bb.johnpyp.net/streams/${slug}`);
  };
}
export function fetchLive(slug) {
  return (dispatch) => {
    dispatch(fetchLiveStarted());
    return dispatch(getLive(slug))
      // .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        if (json.type === 'StreamNotLive') {
          dispatch(fetchLiveFalse(json));
        }
        else if (json.type === 'StreamNotFound') {
          dispatch(fetchLiveFailure(json));
        }
        else {
          dispatch(fetchLiveSucceeded(json));
        }
      })
      .catch(error => dispatch(fetchLiveFailure(error)));
      // .catch(error => console.log('error', error, 'ERROR'));
  };
}