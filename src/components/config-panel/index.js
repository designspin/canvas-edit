import React from 'react';
import Input from '../input';
import ExpansionPanel from '../expansion-panel';
import { AppContext } from '../../providers/AppProvider';

const ConfigPanel = () => (
  <ExpansionPanel title="config">
    <AppContext.Consumer>
      {(context) => {
        const { config } = context;
        const { elements, elementsOnChange } = config;
        const inputEls = Object.keys(elements).map((prop) => {
          
          return (
            <Input
              key={`input-key-${prop}`}
              name={prop}
              type={elements[prop].type}
              value={elements[prop].value}
              onChange={(e) => elementsOnChange(prop, e.target.value) } />
          );
        });

        return inputEls;
      }}
    </AppContext.Consumer>
  </ExpansionPanel>
);

export default ConfigPanel;