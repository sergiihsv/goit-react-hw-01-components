import TransactionsItems from "./TransactionsItems";
import PropTypes from 'prop-types';

function TransactionsHistory ({ transactions }) {
    return (
        <table /* class="transaction-history" */>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
   <TransactionsItems transactions={transactions} />
  </tbody>
</table>
        
        
        
    );
};

    TransactionsHistory.propTypes = {
	transactions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};



export default TransactionsHistory;