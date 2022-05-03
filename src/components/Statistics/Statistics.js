import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import StatisticList from "./StatisticList";

function Statistics({ title, stats }) {
  return (
    <section className={s.Statistics}>
      {title && <h2 className={s.Title}>{title}</h2>}
      <StatisticList data={stats}/> 
      </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  
};

export default Statistics;
