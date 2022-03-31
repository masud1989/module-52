import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetails></PostDetails>}></Route>
            {/* <Route path=':postId' element={<PostDetails></PostDetails>}></Route> */}
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetails></FriendDetails>} ></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
