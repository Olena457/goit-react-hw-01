import Profile from './components/Profile/Profile';
import userData from './data.json';
import friends from './friends.json';
import FriendList from './components/Friends/FriendList.jsx';
import transactions from '../src/transaction.json';
import TransactionHistory from './components/Transactiontable/Transactiontable.jsx';
function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
