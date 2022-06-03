import Profile from "./Profile/Profile";
import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList"
import friends from "../components/FriendList/friends.json"
import TransactionsHistory from "./TransactionHistory/TransactionsHistory"
import transactions from "../components/TransactionHistory/transactions.json"
import {Container} from "./AppStyled";
import {GlobalStyle} from "../constans/GlobalStyles"


export const App = () => {
  return (
    <Container>
      <GlobalStyle/>
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
    </Container>
  );
};


