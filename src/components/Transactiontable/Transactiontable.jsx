import clsx from 'clsx';
import css from './Transactontable.module.css';
import OneTransaction from '../Transaction/Transaction.jsx';
const TransactionHistory = ({ transactions }) => {
  return (
    <div className={clsx(css.container)}>
      {transactions.map(transaction => {
        return (
          <OneTransaction
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        );
      })}
    </div>
  );
};
export default TransactionHistory;
