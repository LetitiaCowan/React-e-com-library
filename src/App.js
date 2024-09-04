import Discounted from './components/Discounted';
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Nav from './components/Nav';
import './index.css';

function App() {
  return (
    <div>
      <Nav/>
      <Landing/>
      <Highlights/>
      <Featured/>
      <Discounted/>
    </div>

  );
}

export default App;
