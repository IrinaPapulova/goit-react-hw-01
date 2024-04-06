import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.friendItem}> 
      <img  className={css.avatar} src={avatar} alt="Avatar" width="80" />
      <p className={css.name}>{name}</p>
      <p  className={clsx(
          css.statusText,
          isOnline ? css.isOnline : css.isOffline
        )}
      >
        {isOnline ? "Onine" : "Offline"}</p>
    </div>
  );
}
