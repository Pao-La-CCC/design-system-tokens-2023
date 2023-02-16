import logo from './logo.svg';
import './App.css';
import { Button } from './components/molecules/Button/Button';
import Input from './components/atoms/Input/Input';
import TextField from './components/atoms/TextField/TextField';
import PhraseLink from './components/molecules/PhraseLink/PhraseLink';


let tag  = ['paragraphText' , 'headingText', 'standardText' ];
let variant = [ 'niv1' , 'niv2', 'niv3' , 'niv4' , 'niv5', 'niv6'];
let sizeElement = ['simple' , 'medium' , 'large' , 'extraLarge'];

function App() {

  return (
    <div className="App">
      <Button primary size="small" label="Test" />
      <Input className="form-control" type="text" placeholder="rechercher" />
      <Button primary size="small" label=" Continuer" />
      <Button primary size="small" label="Envoyer" />
      <PhraseLink 
        text="Don't have an account?" 
        linkText="Sign up" 
        to="/signup"
      />
    </div>
  );
}

export default App;
