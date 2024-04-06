import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.title}>
        <tr>
          <th className={css.titleText}>Type</th>
          <th className={css.titleText}>Amount</th>
          <th className={css.titleText}>Currency</th>
        </tr>
      </thead>

     
        <tbody className={css.tbody} >
        {transactions.map(({ type, amount, currency, id }) => (
          <tr  className={css.trow} key={id}>
            <td className={css.tableText}>{type}</td>
            <td className={css.tableText}>{amount}</td>
            <td className={css.tableText}>{currency}</td>
          </tr>
          ))}
        </tbody>
      
    </table>
  );
}
