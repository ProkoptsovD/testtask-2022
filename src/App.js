import Header from './components/Header/Header.component';
import Hero from './components/Hero/Hero.component';
import Users from './components/Users';
import SignUp from './components/SignUp/SignUp.component';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero />
        <Users />
        <SignUp />
      </main>
    </>
  );
}

export default App;
