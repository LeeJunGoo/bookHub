import { GlobalStyle } from './shared/GlobalStyle';
import { Router } from './shared/Router';
import { app, auth, db } from './firebase';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
