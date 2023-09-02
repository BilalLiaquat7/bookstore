import { Link } from 'react-router-dom';
import { BiSolidGroup } from 'react-icons/bi';

const Books = () => (
  <div className="navbarP">
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
    <div className="Oval">
      <BiSolidGroup size={40} className="icon" />
    </div>
  </div>
);

export default Books;
