import React, { Component } from 'react';

import {
  Typography
} from '@material-ui/core';

class BaseStats extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      level: 1
    };
  }

  handleChange(e) {
    this.setState({ level: e.target.value });
  }

  render() {
    const level = this.state.level;
    return (
      <fieldset>
        <input
          value={level}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default BaseStats;
