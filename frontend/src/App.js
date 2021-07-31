import './App.css';

import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';
import Logos from './components/Logos';
import Boxes from './components/Boxes';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header /> 
      <Logos />
      <Boxes />
      <Contact />
      <Newsletter />
    </div>
  );
}

export default App;
