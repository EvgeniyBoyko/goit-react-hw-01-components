import React from 'react';
import './App.css';
import Profile from './components/Profile/index';
import Statistics from './components/Statistics/index';
import FriendList from './components/FriendList/index';
import TransactionHistory from './components/TransactionHistory/index';

function App() {
  return (
    <div className="App">
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
}

export default App;
