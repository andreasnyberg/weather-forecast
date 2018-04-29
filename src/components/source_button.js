import React from 'react';

const SourceButton = ({ active, children, onClick }) => {  
  const className = ("btn-src btn-src--" + children.toLowerCase()) + 
                    (active ? " active" : "");

  return (
    <div
      className={className}
      onClick={onClick}
      disabled={active}>
      {children}
    </div>
  );
}

export default SourceButton;