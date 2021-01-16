import React from 'react';
import { Link, navigate } from 'gatsby';

// const goToSlicemasters = () => {
//   setTimeout(() => {
//     console.log('Go to slicemasters');
//     // 'replace: true' adds the page to the browser history, allowing the user to go back for example
//     navigate('/slicemasters', {replace: true});
//   }, 2000)
// }

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
        {/* <li>
          <button onClick={goToSlicemasters} type="button">Click here to see slicemasters after 2s</button>
        </li> */}
      </ul>
      {/* Instead of anchor tags we use Link tags in Gatsby. This allows prevents full page reloading every time the user clicks on the link */}
    </nav>
  );
}

export default Nav;