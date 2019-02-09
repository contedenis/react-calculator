import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import math from 'mathjs';

import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Calculator from '../Calculator';
import HistoryOperations from '../HistoryOperations';

import './styles.scss'
import { getOperationsSuccess } from './selectors';
import * as actions from './actions';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      tabSelected: 0,
      operations: [],
    }
    this.calculateOperations = this.calculateOperations.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteOperation = this.handleDeleteOperation.bind(this);
  }

  handleChange = (event, value) => {
    this.setState({ tabSelected: value });
  };

  calculateOperations = () => {
    const { operations } = this.state;
    const { postNewOperation, operationsSuccess } = this.props;
    const prevResult = operations.join('');
  
    if (prevResult) {
      let result = math.eval(prevResult);
      result = math.format(result, { precision: 14 });
      result = String(result);
      this.setState({ operations: [result] });

      const newOperation = operationsSuccess.concat({ prevResult, result })
      postNewOperation([ ...newOperation]);
    }
  }

  handleClick = e => {
    const value = e.target.getAttribute('data-value');
    const { operations } = this.state;
    switch (value) {
      case 'clear':
        this.setState({ operations: [] });
        break;
      case 'equal':
        this.calculateOperations();
        break;
      default:
        const newOperations = [ ...operations ];
        newOperations.push([value]);
        this.setState({ operations: newOperations });
        break;
    }
  }

  handleDeleteOperation(index) {
    const { deleteOperation } = this.props;
    deleteOperation({ index });
  }

  render() {
    const { tabSelected, operations } = this.state;
    const { operationsSuccess } = this.props;
    return (
      <div className="tab">
        <AppBar position="static" color="default" className="tab__header">
          <Tabs
            indicatorColor="primary"
            onChange={this.handleChange}
            textColor="primary"
            value={tabSelected}
          >
            <Tab label="Calculator" />
            <Tab label="History operations" />
          </Tabs>
        </AppBar>
        {tabSelected === 0 && <Calculator operations={operations} handleClick={this.handleClick} />}
        {tabSelected === 1 && <HistoryOperations operationsSuccess={operationsSuccess} handleDeleteOperation={ this.handleDeleteOperation} />}
      </div>
    );
  }
}

Home.defaultProps = {
  operationsSuccess: [],
};

Home.propTypes = {
  operationsSuccess: PropTypes.array,
};

const mapStateToProps = state => ({
  operationsSuccess: getOperationsSuccess(state),
});


export default connect(mapStateToProps, actions)(Home);
