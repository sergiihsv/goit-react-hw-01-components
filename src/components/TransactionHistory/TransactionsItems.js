import PropTypes from "prop-types";
/* import s from './TransactionHistory.module.css'; */


function TransactionsItems({ transactions }) {
	return transactions.map((transaction) => (
		 <tbody key={transaction.id}>
     <tr >
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  </tbody>
	)

	)}



TransactionsItems.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};


export default TransactionsItems;