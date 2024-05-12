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
        <img className={css.imageSvg} src={avatar} alt={name} />
        <p className={css.nameHero}>{name}</p>
        <p className={css.email}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.wraper}>
        <li className={css.itemList}>
          <span
            className={css.spanText}
            style={{ borderRight: '3px solid #474f54' }}
          >
            {followers}
          </span>
          <span className={css.number}>1000</span>
        </li>
        <li className={css.itemList}>
          <span
            className={css.spanText}
            style={{ borderRight: '3px solid #474f54' }}
          >
            {views}
          </span>
          <span className={css.number}>2000</span>
        </li>
        <li className={css.itemList}>
          <span className={css.spanText}>{likes}</span>
          <span className={css.number}>3000</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
