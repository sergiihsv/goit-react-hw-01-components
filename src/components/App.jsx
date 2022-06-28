import Profile from './Profile/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import data from '../data/statistics.json';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
import TransactionsHistory from './TransactionHistory/TransactionsHistory';
import transactions from '../data/transactions.json';
import { Container } from './AppStyled';
import { GlobalStyle } from '../constans/GlobalStyles';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </Container>
  );
};
