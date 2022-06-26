import PropTypes from 'prop-types';
import StatisticList from "./StatisticList";
import {Section,Card,Title,List} from "./StatisticsStyled"

function Statistics({ title, stats }) {
  return (
    <Section>
      <Card>
      {title && <Title>{title}</Title>}

      <List>
      <StatisticList data={stats}/> 
      </List>
      </Card>
      </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
