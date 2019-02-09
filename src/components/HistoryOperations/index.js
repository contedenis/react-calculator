import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

import './styles.scss';

function HistoryOperations({ operationsSuccess, handleDeleteOperation }) {
  return (
    <div className="history-operations">
      <Card className="history-operations">
        <CardContent>
          {operationsSuccess.length > 0
            ? (
              operationsSuccess.map((operation, index) =>
                <TextField
                  className="history-operations__result"
                  id="input-with-icon-textfield"
                  InputProps={{
                    endAdornment: (
                      <Icon
                        className="history-operations__icon"
                        color="action"
                        onClick={() => handleDeleteOperation(index)}
                      >
                        delete_forever
                      </Icon>
                    ),
                  }}
                  key={index}
                  value={`${operation.prevResult} = ${operation.result}`}
                />
              )
            ) : (
              <div className="history-operations__empty-state">           
                You must do an operation first!
              </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
};

HistoryOperations.defaultProps = {
  operationsSuccess: [],
};

HistoryOperations.propTypes = {
  handleDeleteOperation: PropTypes.func.isRequired,
  operationsSuccess: PropTypes.array,
};

export default HistoryOperations;