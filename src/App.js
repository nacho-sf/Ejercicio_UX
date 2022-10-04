import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/styles.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
