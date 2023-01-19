import { useState } from "react";
import Header from './components/header/Header';
import StoriesGallery from './components/storiesGallery/Stories';
import PostGallery from './components/postGallery/Post';
import NewPost from './components/newPost/NewPost';
import Menu from './components/menu/Menu';
import FriendsList from './components/friendsList/FriendsList';
import Filter from "./components/filter/Filter";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import './App.css';


function App() {

  const [filterState, setFilterState] = useState("");
  const [isModalEnabled, setModalEnabled] = useState(false);

  const onHandleModal = () => setModalEnabled((prev) => !prev);

  return (
    <div className="App">
      < Header />
      < StoriesGallery />
      < Filter setFilterState={setFilterState} />
      
      {isModalEnabled && (
          <Modal>
            < NewPost />
          </Modal>
        )}

      < PostGallery filterSearch={filterState}/>
      < Menu />
      < FriendsList  />
      <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
    </div>

  );
}

export default App;
