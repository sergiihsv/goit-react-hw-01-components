import PropTypes from 'prop-types';
import { FriendsList } from './FriendListStyled';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <FriendsList>
      <FriendListItem friends={friends} />
    </FriendsList>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
