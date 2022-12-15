import React from 'react';
import { SourceFilters } from '../actions/types';
import SourceButtonContainer from '../containers/SourceButtonContainer';

const Footer = () => (
  <footer className="footer">
    <div className="source-buttons">
      <SourceButtonContainer
        filter={SourceFilters.SHOW_ALL}
        sourceName="combo"
        buttonLabel="Kombo" />

      <SourceButtonContainer
        filter={SourceFilters.SHOW_SMHI}
        sourceName="smhi"
        buttonLabel="SMHI" />

      <SourceButtonContainer
        filter={SourceFilters.SHOW_OM}
        sourceName="om"
        buttonLabel="OM" />

      <SourceButtonContainer
        filter={SourceFilters.SHOW_OWM}
        sourceName="owm"
        buttonLabel="OWM" />
    </div>
  </footer>
);

export default Footer;