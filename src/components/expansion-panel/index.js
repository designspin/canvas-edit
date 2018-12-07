import React, { Component } from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import './index.css';

class ExpansionPanel extends Component {
  state = {
    expanded: false,
    maxHeight: 0
  }

  constructor(props) {
    super(props);
    this.panelRef = React.createRef();
    this.expand = this.expand.bind(this);
  }

  componentDidMount() {
    const panelNode = this.panelRef.current;
    let height = 0;

    [].forEach.call(panelNode.childNodes, (el) => {
      height += el.clientHeight;
    });

    this.setState({
      maxHeight: height
    });
  }

  expand() {
    this.setState({
      expanded: !this.state.expanded
    },() => {
      if(this.state.expanded) {
        this.panelRef.current.style.maxHeight = this.state.maxHeight + 'px';
        this.panelRef.current.style.height = this.state.maxHeight + 'px';
      } else {
        this.panelRef.current.style.maxHeight = 0;
      }
    });
  }

  render() {
    return (
      <div className={`expansion-panel ${(this.state.expanded) ? 'expansion-panel--open' : ''}`}>
        <div className="expansion-panel__title">
          <h4>{this.props.title}</h4>
          <button
            onClick={this.expand} 
            className="expansion-panel__button" 
            aria-label="reveal">{this.state.expanded ? <FaAngleUp /> : <FaAngleDown /> }</button>
        </div>
        <div 
          ref={this.panelRef} 
          className="expansion-panel__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ExpansionPanel;

