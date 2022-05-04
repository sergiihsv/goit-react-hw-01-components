import Profile from "./Profile/Profile";
import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList"
import friends from "../components/FriendList/friends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import transactions from "../components/TransactionHistory/transactions.json"



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />  
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
     
    </div>
  );
};


