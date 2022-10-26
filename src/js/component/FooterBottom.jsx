import React from "react";
// import { Footer } from 'react-bootstrap';


const FooterBottom = (props) => {
  let name = props.name;
  return (
    
<body className="d-flex flex-column">
<Footer/>
  <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50 fixed-bottom">
    <div className="container text-center">
      <small>Copyright &copy; Your Website</small>
    </div>
  </footer>
</body>
  );
};

export default FooterBottom;