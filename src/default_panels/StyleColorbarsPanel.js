import React from 'react';
import PropTypes from 'prop-types';

import {Radio, TextEditor, TraceAccordion, Fold, Panel} from '../components';

import {localize} from '../lib';

const StyleTracesPanel = ({localize: _}) => (
  <TraceAccordion>
    <Panel>
      <Radio
        attr="showscale"
        options={[
          {label: _('Show'), value: true},
          {label: _('Hide'), value: false},
        ]}
      />
      <Fold name={_('Title')}>
        <TextEditor label={_('Title')} attr="colorbar.title" />
      </Fold>
      <Fold name={_('Size and Positioning')} />
      <Fold name={_('Labels')} />
      <Fold name={_('Ticks')} />
      <Fold name={_('Borders and Background')} />
    </Panel>
  </TraceAccordion>
);

StyleTracesPanel.propTypes = {
  localize: PropTypes.func,
};

export default localize(StyleTracesPanel);