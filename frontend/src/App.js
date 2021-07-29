import './App.css';

import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';
import Logos from './components/Logos';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header /> 
      <Logos />
    </div>
  );
}

export default App;
