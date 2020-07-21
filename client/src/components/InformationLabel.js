import React from 'react';
import { getAccumulatedValues, formatNumber } from '../helpers/FunctionHelpers';

export default function InformationLabel({ transactions }) {
  const { infoBox, labelBoxStart, labelBoxEnd, titleText, incomeText, expenseText } = styles;

  const values = getAccumulatedValues(transactions);

  const { income, expense, balance } = values;

  return (
    <div style={infoBox}>
      <div style={labelBoxStart}>
        <label style={titleText}>
          <b>Lançamentos:&nbsp;</b>
        </label>
        <label style={titleText}> {transactions.length} </label>
      </div>

      <div style={labelBoxStart}>
        <label style={titleText}>
          <b>Receitas:&nbsp;</b>
        </label>
        <label style={incomeText}>
          {' '}
          <b>{formatNumber(income)}</b>
        </label>
      </div>

      <div style={labelBoxEnd}>
        <label style={titleText}>
          <b>Despesas:&nbsp;</b>
        </label>
        <label style={expenseText}>
          {' '}
          <b>{formatNumber(expense)}</b>{' '}
        </label>
      </div>

      <div style={labelBoxEnd}>
        <label style={titleText}>
          <b>Saldo:&nbsp;</b>
        </label>
        <label style={{ fontStyle: 'normal', color: balance > 0 ? '#27ae60' : '#c0392b' }}>
          {' '}
          <b>{formatNumber(balance)}</b>{' '}
        </label>
      </div>
    </div>
  );
}

const styles = {
  infoBox: {
    padding: '5px',
    border: '1px solid grey',
    borderRadius: '5px',
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },

  labelBoxStart: {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  labelBoxEnd: {
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  titleText: {
    fontStyle: 'normal',
    color: 'black',
  },

  incomeText: {
    fontStyle: 'normal',
    color: '#27ae60',
  },

  expenseText: {
    fontStyle: 'normal',
    color: '#c0392b',
  },
};
