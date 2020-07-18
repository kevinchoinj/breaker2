export const FETCH_VIDEOS_STARTED = Symbol('FETCH_VIDEOS_STARTED');
export const FETCH_VIDEOS_SUCCEEDED = Symbol('FETCH_VIDEOS_SUCCEEDED');
export const FETCH_VIDEOS_FAILURE = Symbol('FETCH_VIDEOS_FAILURE');

const fetchVideosStarted = request => ({type: FETCH_VIDEOS_STARTED, request});
const fetchVideosSucceeded = data => ({type: FETCH_VIDEOS_SUCCEEDED, data});
const fetchVideosFailure = (data, error) => ({type: FETCH_VIDEOS_FAILURE, data, error});

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