import logo from './logo.svg';
import './App.css';
import { Button } from './components/molecules/Button/Button'
import Input from './components/atoms/Input/Input';

function App() {


  return (
    <div className="App">
      <Button primary size="small" label="Test" />
      <Input className="form-control" type="text" placeholder="rechercher" />
    </div>
  );
}

export default App;
