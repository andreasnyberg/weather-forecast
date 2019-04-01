import React from 'react';

const SourceButton = ({ active, children, onClick }) => {
  const className = ("btn-src btn-src--" + children.toLowerCase()) +
                    (active ? " active" : "");

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={active}>
      {children}
    </button>
  );
}

export default SourceButton;