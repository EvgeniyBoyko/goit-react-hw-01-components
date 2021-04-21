import React from 'react'
import transactions from './transactions.json';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = () => {
    return (<>
        <table className={styles.transactionHistory}>
            <thead className={styles.theadItem}>
                <tr className={styles.trItem}>
                <th className={styles.thItem}>Type</th>
                <th className={styles.thItem}>Amount</th>
                <th className={styles.thItem}>Currency</th>
                </tr>
            </thead>
            <tbody>
                <Transaction props={transactions} />
            </tbody>
        </table>
    </>);
}
 
const transactionMarkup = transactions.map(({ id, type, amount, currency }) => (
    <tr key={id} className={styles.trItem}>
        <td className={styles.tdItem}>{type}</td>
        <td className={styles.tdItem}>{amount}</td>
        <td className={styles.tdItem}>{currency}</td>
    </tr>));

const Transaction = (props) => {
    return <>{transactionMarkup}</>
};

export default TransactionHistory;

// TransactionHistory.defaultProps = {

// };

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};