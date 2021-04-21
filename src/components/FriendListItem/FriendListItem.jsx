import React from 'react'
import friends from '../FriendList/friends.json'
import styles from './FriendListItem.module.css'


const friend = friends.map(({id ,avatar, name, isOnline}) => (
        <li className={styles.item} key={id}>
            <span className={styles.status}>{isOnline ? 'Online' : 'Offline'}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
                <p className={styles.name}>{name}</p>
    </li>))
        
const FriendListItem = (prors) => {
    return <>{friend}</>
}

export default FriendListItem;