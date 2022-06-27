import PropTypes from 'prop-types';
import {
  Container,
  ProfileCard,
  StatisticList,
  Avatar,
  UserName,
  TagText,
  LocationText,
  StatisticItems,
  Label,
  Quantity,
} from './ProfileStyled';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container>
      <ProfileCard>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <TagText>@{tag}</TagText>
        <LocationText>{location}</LocationText>
      </ProfileCard>

      <StatisticList>
        <StatisticItems>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatisticItems>
        <StatisticItems>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatisticItems>
        <StatisticItems>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatisticItems>
      </StatisticList>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
