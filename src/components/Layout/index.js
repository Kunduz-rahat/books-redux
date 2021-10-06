import React from 'react';
import Header from "../Header";

const Layout = ({children}) => {
  return (
    <>
      <Header/>
     <div className="container py-4 ">
       {children}
     </div>
    </>
  );
};

export default Layout;