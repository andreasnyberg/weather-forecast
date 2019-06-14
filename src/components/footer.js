import React from 'react';
import { DataSourceFilters } from '../actions/types';
import SourceButtonContainer from '../containers/SourceButtonContainer';

const Footer = () => (
  <footer className="footer">
    <div className="source-buttons">
      <SourceButtonContainer filter={DataSourceFilters.SHOW_ALL}>
        Kombo
      </SourceButtonContainer>

      <SourceButtonContainer filter={DataSourceFilters.SHOW_SMHI}>
        SMHI
      </SourceButtonContainer>

      <SourceButtonContainer filter={DataSourceFilters.SHOW_OWM}>
        OWM
      </SourceButtonContainer>
    </div>
  </footer>
);

export default Footer;