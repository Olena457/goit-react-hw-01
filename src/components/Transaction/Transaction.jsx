import css from './Transaction.module.css';

const OneTransaction = ({ type, amount, currency }) => {
  return (
    <tr className={css.tr}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
};

export default OneTransaction;
