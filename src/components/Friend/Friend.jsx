import css from './Friend.module.css';
import clsx from 'clsx';
const FriendListItem = ({ avatar, name, isOnline }) => {
  const classNames = clsx(isOnline ? css.online : css.offline);
  return (
    <div className={css.card}>
      <img className={heroImage} src={avatar} alt="Avatar" width="48" />
      <p className={heroName}>{name}</p>
      <p className={classNames}>{isOnline}</p>
    </div>
  );
};
export default FriendListItem;
