import { Link } from 'react-router-dom';
import { BiSolidGroup } from 'react-icons/bi';

const Books = () => (
  <div className="navbarP">
    <div className="navbar">
      <span className="Bookstore-CMS Text-Style-3">Bookstore CMS</span>
      <ul>
        <li>
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
