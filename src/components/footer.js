import React from 'react';
import { DataSourceFilters } from '../actions/types';
import FilterSourceButton from '../containers/filter_source_button';

const Footer = () => (
  <footer className="source-buttons">
      <FilterSourceButton filter={DataSourceFilters.SHOW_ALL}>
        Kombo
      </FilterSourceButton>

      <FilterSourceButton filter={DataSourceFilters.SHOW_SMHI}>
        SMHI
      </FilterSourceButton>

      <FilterSourceButton filter={DataSourceFilters.SHOW_OWM}>
        OWM
      </FilterSourceButton>
  </footer>
);

export default Footer;