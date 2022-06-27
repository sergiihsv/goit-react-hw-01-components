import PropTypes from 'prop-types';
import { Item, Avatar, Name, OnLine, OffLine } from './FriendListStyled';

function FriendListItem({ friends }) {
  return friends.map(friend => (
    <Item key={friend.id}>
      {friend.isOnline ? <OnLine /> : <OffLine />}
      <Avatar src={friend.avatar} alt="User avatar" width="48" />
      <Name>{friend.name}</Name>
    </Item>
  ));
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendListItem;
