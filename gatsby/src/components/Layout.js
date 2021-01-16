import React from 'react';
import Footer from './Footer';
import Nav from './Nav';



const Layout = (props) => {
  return (
    <div>
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



// Gatsby doesn't have a special layout system, we just use standard React components, and call it Layout. Then we use it instead of the wrapping div on each page
// We can pass props to the component and access the  children elements (remember, props are represented by an object). The children will usually be unique to each page, i.e. unique page content


// To auto-import components easier, put the cursor on it, press Ctrl+Space and select the auto-import option
// Ctrl+P to search for the needed file easier
