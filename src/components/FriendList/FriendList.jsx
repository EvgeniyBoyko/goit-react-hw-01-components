import React from 'react'
import friends from './friends.json';
import FriendListItem from '../FriendListItem/index';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendList() {
    return <>
        <ul className={styles.friendList}>
            <FriendListItem prors={friends} />

        </ul>
        </>
};

export default FriendList;

FriendList.defaultProps = {
  avatar:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.depositphotos.com%2Fstock-photos%2F%25D0%25BD%25D0%25B5%25D1%2582-%25D0%25BA%25D0%25B0%25D1%2580%25D1%2582%25D0%25B8%25D0%25BD%25D0%25BA%25D0%25B8-%25D0%25B8%25D0%25BA%25D0%25BE%25D0%25BD%25D0%25BA%25D0%25B0.html&psig=AOvVaw2SeSbEFX0h4xDz3SNJQmAe&ust=1619008587915000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjtxJDrjPACFQAAAAAdAAAAABAD',
    isOnline: false,
};

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
};