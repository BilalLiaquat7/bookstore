import { Link } from 'react-router-dom';

const Books = () => (
  <div className="navBar">
    <h1>Books Store</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </div>
);

export default Books;
