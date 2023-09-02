import { Link } from 'react-router-dom';

const Books = () => (
  <div className="navbar">
    <h1>Bookstore CMS</h1>
    <ul className="">
      <li className="">
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </div>
);

export default Books;
