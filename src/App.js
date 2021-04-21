import React from 'react';
import './App.css';
import Profile from './components/Profile/index';
import Statistics from './components/Statistics/index';
import FriendList from './components/FriendList/index';
import TransactionHistory from './components/TransactionHistory/index';

import user from './user.json';
import friends from './friends.json';
import statisticalData from './statistical-data.json';
import transactions from './transactions.json';

function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics data={statisticalData} />
      <FriendList friend={friends} />
      <TransactionHistory props={transactions} />
    </div>
  );
}

export default App;
