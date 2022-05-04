import propTypes from "prop-types";


function FriendListItem({ friends }) {
    return friends.map((friend)=>
<li class="item">
            <span class="status">isOnline</span>
  <img class="avatar" src={friend.avatar} alt='User avatar' width="48" />
            <p class="name">{friend.name}</p>
</li>
        
    );
    
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