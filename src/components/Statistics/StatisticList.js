import PropTypes from 'prop-types';
import {Item, Label,Percentage} from "./StatisticsStyled"

function StatisticList({ data }) {
    return (
        data.map(item =>
            <Item  key={item.id}>
      <Label>{item.label}</Label>
                <Percentage>{item.percentage}%</Percentage>
            </Item>
        )
)
    
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

