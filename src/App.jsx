import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        avatar={user.avatar}
        username={user.username}
        location={user.location}
        tag={user.tag}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
