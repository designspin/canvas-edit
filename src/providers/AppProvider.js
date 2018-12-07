import React, { Component } from 'react';

export const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    config: {
      elements: {
        width: {
          type: 'text',
          name: 'width',
          value: '649'
        },
        height: {
          type: 'text',
          name: 'height',
          value: '405'
        },
        dpi: {
          type: 'text',
          name: 'dpi',
          value: '3.125'
        }
      },
      elementsOnChange: (name, value) => {
        this.setState((prevState) => ({
          config: {
            ...prevState.config,
            elements: {
              ...prevState.config.elements,
              [name]: {
                ...prevState.config.elements[name],
                value: value
              }
            }
          }
        }));
      }
    }
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
