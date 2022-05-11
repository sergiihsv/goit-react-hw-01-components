import PropTypes from 'prop-types';
import s from './Profile.module.css';
import {Container, ProfileCard, StatisticList,Avatar,UserName,TagText,LocationText} from "./ProfileStyled"



function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Container>
      <ProfileCard>
        <Avatar src={avatar} alt="User avatar"  />
        <UserName>{username}</UserName>
        <TagText>@{tag}</TagText>
        <LocationText>{location}</LocationText>
      </ProfileCard>

      <StatisticList>
        <li>
          <span className={s.Label}>Followers</span>
          <span className={s.Quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.Label}>Views</span>
          <span className={s.Quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.Label}>Likes</span>
          <span className={s.Quantity}>{stats.likes}</span>
        </li>
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

  })
};

export default Profile;
