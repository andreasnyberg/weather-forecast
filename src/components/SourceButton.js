import React from 'react';

const SourceButton = ({ selected, source, label, status, onClick }) => {
  const className = ("button button--source button--" + source.toLowerCase());
  const classNameSelected = selected ? "selected" : "";
  const classNameStatus = status ? status.toLowerCase() : "";
  const classNames = `${className} ${classNameSelected} ${classNameStatus}`;
  const disabled = status === 'ERROR' || selected;

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  );
}

export default SourceButton;