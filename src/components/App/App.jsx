import userData from "../../userData.json";
import friendsInitial from "../../friends.json";
import transactionsList from "../../transactions.json";

import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import "./App.module.css";

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsInitial} />
      <TransactionHistory transactions={transactionsList} />
    </div>
  );
}
