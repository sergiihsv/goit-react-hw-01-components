import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function StatisticList({ data }) {
    return (<ul>
        {data.map(item =>
            <li className={s.Item} key={item.id}>
      <span className={s.Label}>{item.label}</span>
                <span className={s.Percentage}>{item.percentage}</span>
            </li>
        )}
</ul>)
    
}

StatisticList.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	),
};

export default StatisticList;

