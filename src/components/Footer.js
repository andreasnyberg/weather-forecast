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
        buttonLabel="Open-Meteo" />

      <SourceButtonContainer
        filter={SourceFilters.SHOW_OWM}
        sourceName="owm"
        buttonLabel="Open Weather Map" />
    </div>
  </footer>
);

export default Footer;