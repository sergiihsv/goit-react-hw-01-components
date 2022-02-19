import s from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.Profile}>
      <div className={s.Description}>
        <img src={avatar} alt="User avatar" className={s.Avatar} />
        <p className={s.Name}>{username}</p>
        <p className={s.Tag}>{tag}</p>
        <p className={s.Location}>{location}</p>
      </div>

      <ul className={s.Stats}>
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
      </ul>
    </div>
  );
}

export default Profile;
