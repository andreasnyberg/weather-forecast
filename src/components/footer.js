import React from 'react';
import { SourceFilters } from '../actions/types';
import SourceButtonContainer from '../containers/SourceButtonContainer';

const Footer = () => (
  <footer className="footer">
    <div className="source-buttons">
      <SourceButtonContainer
        filter={SourceFilters.SHOW_ALL}
        source="combo"
        label="Kombo" />

      <SourceButtonContainer
        filter={SourceFilters.SHOW_SMHI}
        source="smhi"
        label="SMHI" />

      <SourceButtonContainer
        filter={SourceFilters.SHOW_OWM}
        source="owm"
        label="OWM" />

      <SourceButtonContainer
        filter={SourceFilters.SHOW_DS}
        source="ds"
        label="DS" />
    </div>
  </footer>
);

export default Footer;