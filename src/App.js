import { useEffect, useState } from 'react';
import { fetchUser } from './services/usersAPI';

import Header from './components/Header/Header.component';
import Hero from './components/Hero/Hero.component';
import Users from './components/Users';
import SignUp from './components/SignUp/SignUp.component';

function App() {
  const [users, setUsers] = useState(() => [])

  useEffect(() => {
    fetchUser().then(({users}) => setUsers(users))
  }, [])
  return (
    <>
      <Header/>
      <main>
        <Hero />
        <Users userList={users}/>
        <SignUp />
      </main>
    </>
  );
}

export default App;
