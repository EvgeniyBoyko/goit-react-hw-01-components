import React from 'react'
import statisticalData from './statistical-data.json';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const randomColor = () => '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()

function Statistics() {
    
    return <>
      <section className={styles.statistics}>
         <h2 className={styles.title}>Upload stats</h2>
            <ul className={styles.statList}>
                <Stats props={statisticalData} />
                
            </ul>
      </section>
    </>
    
};
 
const statsMarkup = statisticalData.map(({ id, label, percentage }) => {
    return (<li className={styles.item} key={id} style={{backgroundColor: randomColor()}}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}</span>
    </li>)
});

const Stats = (props) => {
    return <>{statsMarkup}</>
};

export default Statistics;


Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};