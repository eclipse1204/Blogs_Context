import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs/:BlogID" element={<BlogPage></BlogPage>}></Route>
        <Route path="/tags/:tagID" element={<TagPage></TagPage>}></Route>
        <Route path="/categories/:category" element={<CategoryPage></CategoryPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
