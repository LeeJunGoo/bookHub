import { GlobalStyle } from './shared/GlobalStyle';
import { Router } from './shared/Router';
import { app, auth, db } from './firebase';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
