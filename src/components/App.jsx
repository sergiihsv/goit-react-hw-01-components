import Profile from "./Profile/Profile";
import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList"
import friends from "../components/FriendList/friends.json"
import TransactionsHistory from "./TransactionHistory/TransactionsHistory"
import transactions from "../components/TransactionHistory/transactions.json"

export const App = () => {
  return (
    <div
      style={{
        /* height: '100vh',
        display: 'block', */
       /*  justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40, */
        /* textTransform: 'uppercase', */
       /*  color: '#010101',
        margin: '0 auto', */
       /*  padding: '50px 10px', */
	     /*  width: '1004px', */
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
     <TransactionsHistory transactions={transactions }/>
    </div>
  );
};


