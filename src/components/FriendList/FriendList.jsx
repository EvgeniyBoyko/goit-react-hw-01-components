import React from 'react';
import FriendListItem from '../FriendListItem/index';
import styles from './FriendList.module.css';

function FriendList({ friend }) {
    const map = friend.map((item) => <FriendListItem {...item} key={item.id} />)
    return (<>
        <ul className={styles.friendList}>
            {map}
        </ul>
    </>)
};

export default FriendList;

