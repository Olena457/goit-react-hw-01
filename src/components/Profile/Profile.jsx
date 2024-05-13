import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.containner}>
      <div className={css.card}>
        <img
          className={css.imageSvg}
          src={image}
          alt="User avatar"
          width={50}
          size={50}
        />
        <p className={css.nameHero}>{name}</p>
        <p className={css.tag}>jgluke {tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.wraper}>
        <li className={css.itemList}>
          <span className={css.spanText}>Followers</span>
          <span className={css.number}>{followers}</span>
        </li>
        <li className={css.itemList}>
          <span className={css.spanText}>Views</span>
          <span className={css.number}>{views ? views : 'No data'}</span>
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
