import logo from './logo.svg';
import './App.css';
import { Button } from './components/molecules/Button/Button';
import Input from './components/atoms/Input/Input';
import TextField from './components/atoms/TextField/TextField';
import PhraseLink from './components/molecules/PhraseLink/PhraseLink';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';



let tag  = ['paragraphText' , 'headingText', 'standardText' ];
let variant = [ 'niv1' , 'niv2', 'niv3' , 'niv4' , 'niv5', 'niv6'];
let sizeElement = ['simple' , 'medium' , 'large' , 'extraLarge'];

function App() {

  return (
    <div>

    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
     <div className="App">

        <SignInPage/>
         
    </div>
    </div>
  );
}

export default App;
