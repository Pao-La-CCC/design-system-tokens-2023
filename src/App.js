import logo from './logo.svg';
import './App.css';
import { Button } from './components/molecules/Button/Button';
import Link from './components/atoms/Links/Link';
import { BrowserRouter } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Button primary size="small" label="Test" />
      <BrowserRouter>
          <Link to="/" className="link">
          Link
          </Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
