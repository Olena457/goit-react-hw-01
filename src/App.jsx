import Profile from './components/Profile/Profile';
import userData from './data.json';
// import userData from './components/userData';

console.log(userData);
// const userData = {
//   username: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

function App() {
  return (
    <>
      App
      <Profile />
    </>
  );
}

export default App;
