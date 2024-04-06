import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.listStats}>
        <li className={css.listItem}>
          <span className={css.stats}>Followers</span>
          <span className={css.statValue}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.stats}>Views</span>
          <span className={css.statValue}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.stats}>Likes</span>
          <span className={css.statValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
