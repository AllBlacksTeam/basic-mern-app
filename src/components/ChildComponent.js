import React, {Component, PropTypes} from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'USA'
    };
  }
  render() {
    return (
      <div>
        <h3>This comes from the Child Component</h3>
        <p>City: {this.props.city}, Country: {this.state.country}</p>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  city: PropTypes.string
};

export default ChildComponent;
