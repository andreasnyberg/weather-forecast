import React from 'react';

const SourceButton = ({ active, children, onClick }) => {
  const className = ("source-button source-button--" + children.toLowerCase()) +
                    (active ? " selected" : "");

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