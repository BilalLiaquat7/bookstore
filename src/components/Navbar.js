import { Link } from 'react-router-dom';

export default function Books() {
  return (
    <div className='navBar'>
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
}