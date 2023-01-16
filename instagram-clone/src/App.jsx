import Header from './components/header/Header';
import StoriesGallery from './components/storiesGallery/Stories';
import PostGallery from './components/postGallery/Post';
import './App.css';
import Menu from './components/menu/Menu';



function App() {
  return (
    <div className="App">
      < Header />
      < StoriesGallery />
      < PostGallery />
      < Menu />
    </div>
  );
}

export default App;
