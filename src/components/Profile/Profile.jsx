import css from './Profile.module.css';
const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.containner}>
      <div className={css.card}>
        <img className={css.imageSvg} src={avatar} alt="" />
        <p className={css.nameHero}>{name}</p>
        <p className={css.tag}>jgluke</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.wraper}>
        <li className={css.itemList}>
          <span className={css.spanText}>Followers</span>
          <span className={css.number}>{followers}</span>
        </li>
        <li className={css.itemList}>
          <span className={css.spanText}>Views</span>
          <span className={css.number}>{views}</span>
        </li>
        <li className={css.itemList}>
          <span className={css.spanText}>Likes</span>
          <span className={css.number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
