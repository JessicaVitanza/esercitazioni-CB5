import Header from './components/header/Header';
import StoriesGallery from './components/storiesGallery/Stories';
import PostGallery from './components/postGallery/Post';
import NewPost from './components/newPost/NewPost';
import Menu from './components/menu/Menu';
import FriendsList from './components/friendsList/FriendsList';
import './App.css';




function App() {
  return (
    <div className="App">
      < Header />
      < StoriesGallery />
      < NewPost />
      < PostGallery />
      < Menu />
      < FriendsList />
    </div>

  );
}

export default App;
