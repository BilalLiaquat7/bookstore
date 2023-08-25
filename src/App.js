import './App.css';
import { Route, Routes } from 'react-router-dom';
import BooksList from './components/BooksList';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={<BooksList />}/>
        <Route path='/categories' element={<Categories />}/>
      </Routes>
    </div>
  );
}

export default App;
