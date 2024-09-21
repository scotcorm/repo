import './App.css';
import Header from './components/Header';
import LibrariesList from './features/libraries/LibrariesList';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <LibrariesList />
      <Footer />
    </div>
  );
}

export default App;
