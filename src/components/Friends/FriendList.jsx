import clsx from 'clsx';
import css from './FriendList.module.css';
import FriendListItem from '../Friend/FriendListItem.jsx';
const FriendList = ({ friends }) => {
  return (
    <div className={clsx(css.container)}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </div>
  );
};
export default FriendList;
