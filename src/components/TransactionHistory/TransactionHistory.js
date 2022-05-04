import PropTypes from "prop-types";
import TransactionsItems from "./TransactionsItems";


function TransactionHistory(transactions) {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
<TransactionsItems transactions={transactions} />
  
</table>
    )
    
}

TransactionHistory.propTypes = {
	transactions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TransactionHistory;