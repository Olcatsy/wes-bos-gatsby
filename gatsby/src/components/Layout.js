import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const Layout = (props) => {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
}

//  Same thing using variable destructuring to access props.children and store it in variable 'children'
// const Layout = ({ children }) => {
//   return (
//     <div>
//       <Nav />
//       {children}
//       <Footer />
//     </div>
//   );
// }

export default Layout;

