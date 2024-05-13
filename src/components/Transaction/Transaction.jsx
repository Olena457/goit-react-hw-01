import css from './Transaction.module.css';
const OneTransaction = ({ type, amount, currency }) => {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.th}>{type}</th>
          <th className={css.th}>{type}</th>
          <th className={css.th}>{type}</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        <tr>
          <td className={css.td}>{type}</td>
          <td className={css.td}>{amount}</td>
          <td className={css.td}>{currency}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default OneTransaction;
