/* import PropTypes from 'prop-types'; */
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem'



function FriendList({ friends }) {
    return (
        <ul className={s.Friend_list}>
  <FriendListItem friends={friends} />
</ul>
    );
    
    
    
}


export default FriendList;