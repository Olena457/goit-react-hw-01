import css from './Friend.module.css';
import clsx from 'clsx';
const FriendListItem = ({ avatar, name, isOnline }) => {
  const classNames = clsx({ [css.online]: isOnline, [css.offline]: !isOnline });
  return (
    <div className={css.card}>
      <img className={css.heroImage} src={avatar} alt="Avatar" width={70} />
      <p className={css.heroName}>{name}</p>
      <p className={classNames}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
export default FriendListItem;
