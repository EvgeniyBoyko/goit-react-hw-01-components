import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Profile.module.css";

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={styles.profile}>
  <div className={styles.description}>
    <img
            src={avatar}
            alt="Аватар пользователя"
            className={styles.avatar}
            width='160'
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

    <ul className={styles.stats}>
    <li className={styles.list}>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}> {stats.followers}</span>
    </li>
    <li className={styles.list}>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}> {stats.views}</span>
    </li>
    <li className={styles.list}>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}> {stats.likes}</span>
    </li>
  </ul>
    </div>)

export default Profile;

Profile.defaultProps = {
  avatar:
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.depositphotos.com%2Fstock-photos%2F%25D0%25BD%25D0%25B5%25D1%2582-%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D0%25B8%25D0%25BD%25D0%25BA%25D0%25B8-%25D0%25B8%25D0%25BA%25D0%25BE%25D0%25BD%25D0%25BA%25D0%25B0.html&psig=AOvVaw2SeSbEFX0h4xDz3SNJQmAe&ust=1619008587915000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjtxJDrjPACFQAAAAAdAAAAABAD',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}