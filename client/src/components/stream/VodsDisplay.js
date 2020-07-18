import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  color: ${props => props.theme.colorText};
  flex-wrap: wrap;
  padding: 10px;
`;
const StyledLink = styled(Link)`
  padding: 12px 24px;
  border-radius: 10px;
  display: block;
  margin: 10px;
  color: ${props => props.theme.colorText};
  text-decoration: none;
  font-size: 13px;
  transition: .2s ease;
  background-color: ${props => props.theme.colorSelectable};
  &:hover {
    background-color: ${props => props.theme.colorSelectableHover};
  }
`;
const StyledTitle = styled.div`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 5px;
`;
const StreamVods = ({slug, videos}) => {
  return (
    <StyledWrapper>
      {videos.map((value) => {
        const fileName = value.replace('.mp4', '');
        const timestamp = dayjs(parseInt(fileName, 10))
        return (
          <StyledLink to={`/${slug}/videos/${fileName}`} key={value}>
            <StyledTitle>
              {timestamp.format('MMMM DD, YYYY')}
            </StyledTitle>
            {timestamp.format('HH:MM')}
          </StyledLink>
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
