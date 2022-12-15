import React from 'react';

const SourceButton = ({ selected, sourceName, buttonLabel, status, onClick }) => {
  const className = ("button button--source button--" + sourceName.toLowerCase());
  const classNameSelected = selected ? "selected" : "";
  const classNameStatus = status ? status.toLowerCase() : "";
  const classNames = `${className} ${classNameSelected} ${classNameStatus}`;
  const disabled = status === 'ERROR' || selected;
  //TODO döp om OM/OWM till Open-Meteo etc

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled}>
      {buttonLabel} 
    </button>
  );
}

export default SourceButton;