import React from 'react';
import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';


        
const FriendListItem = ({isOnline, avatar, name}) => {
const friend = 
        <li className={styles.item}>
            <span className={styles.status}>{isOnline ? 'Online' : 'Offline'}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
                <p className={styles.name}>{name}</p>
        </li>

    return <>{friend}</>
}

export default FriendListItem;

FriendListItem.defaultProps = {
  avatar:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.depositphotos.com%2Fstock-photos%2F%25D0%25BD%25D0%25B5%25D1%2582-%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D0%25B8%25D0%25BD%25D0%25BA%25D0%25B8-%25D0%25B8%25D0%25BA%25D0%25BE%25D0%25BD%25D0%25BA%25D0%25B0.html&psig=AOvVaw2SeSbEFX0h4xDz3SNJQmAe&ust=1619008587915000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjtxJDrjPACFQAAAAAdAAAAABAD',
    isOnline: false,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
};