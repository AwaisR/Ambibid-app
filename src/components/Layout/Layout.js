import React from 'react';
import './layout.css';
const LayoutInner = ({ children }) => {
  return (
    <>
      <div className="layout-inner">{children}</div>
    </>
  );
};
export default LayoutInner;
