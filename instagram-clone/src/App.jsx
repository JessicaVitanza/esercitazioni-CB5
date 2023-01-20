import { useState } from "react";
import Header from './components/header/Header';
import StoriesGallery from './components/storiesGallery/Stories';
import PostGallery from './components/postGallery/Post';
import NewPost from './components/newPost/NewPost';
import Menu from './components/menu/Menu';
import FriendsList from './components/friendsList/FriendsList';
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import './App.css';


function App() {

  const [isModalEnabled, setModalEnabled] = useState(false);

  const onHandleModal = () => setModalEnabled((prev) => !prev);

  return  (
    <div className="App">
      < Header />
      < StoriesGallery />
      
      {isModalEnabled && (
          <Modal>
            < NewPost />
          </Modal>
        )}

      < PostGallery/>
      < Menu />
      < FriendsList  />
      <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
      </div>
      )
}

export default App;
