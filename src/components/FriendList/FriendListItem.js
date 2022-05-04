import PropTypes from 'prop-types';
import s from './FriendList.module.css';




function FriendListItem({ friends }) {
	return friends.map((friend) => (
		<li className={s.Item} key={friend.id}>
			<span className={s.Status}>isOnline</span>
			<img className={s.Avatar} src={friend.avatar} alt='User avatar' width="48" />
			<p className={s.Name}>{friend.name}</p>
		</li>
	)

	)}

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