import css from './Transactontable.module.css';
import OneTransaction from '../Transaction/Transaction.jsx';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tbody}>
        {transactions.map(transaction => (
          <OneTransaction
            id={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
