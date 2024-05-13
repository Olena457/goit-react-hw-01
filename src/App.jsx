import Profile from './components/Profile/Profile';
import userData from './data.json';
import friends from './friends.json';
import FriendList from './components/Friends/Friends';

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
    </>
  );
}

export default App;
