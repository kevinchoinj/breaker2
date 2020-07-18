import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';

const StyledWrapper = styled.div`
  height: 100%;
  flex: 1;
  color: ${props => props.theme.colorText};
`;

const StreamVods = ({slug, videos}) => {
  return (
    <StyledWrapper>
      {videos.map((value) => {
        const timestamp = value.replace('.mp4', '');
        console.log(dayjs(parseInt(timestamp, 10)).format('MMMM DD, YYYY HH:MM'))
        return (
          <div key={value}>
            <Link to={`/${slug}/videos/${timestamp}`}>
              {dayjs(parseInt(timestamp, 10)).format('MMMM DD, YYYY HH:MM')}
            </Link>
          </div>
        )
      })}
    </StyledWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    slug: state.page.id,
    videos: state.data.videos,
  };
};

export default connect(mapStateToProps, null)(withRouter(StreamVods));
