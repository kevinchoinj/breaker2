import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import { setId } from 'actions/page';

const StyledWrapper = styled.div`
  height: 100%;
  flex: 1;
  background-color: #ddd;
`;

const StreamVods = ({match, setId}) => {
  useEffect(() => {
    setId(match.params.id);
  }, [match])
  return (
    <StyledWrapper>
      Vods Grid
    </StyledWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setId: (id) => dispatch(setId(id)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(StreamVods));
