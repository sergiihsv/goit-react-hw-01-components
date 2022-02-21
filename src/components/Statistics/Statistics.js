import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={s.Statistics}>
      {title && <h2 className={s.Title}>{title}</h2>}

      <ul className={s.Stat_list}>
        <li className={s.Item}>
          <span className={s.Label}>.docx</span>
          <span className={s.Percentage}>4%</span>
        </li>
        <li className={s.Item}>
          <span className={s.Label}>.mp3</span>
          <span className={s.Percentage}>14%</span>
        </li>
        <li className={s.Item}>
          <span className={s.Label}>.pdf</span>
          <span className={s.Percentage}>41%</span>
        </li>
        <li className={s.Item}>
          <span className={s.Label}>.mp4</span>
          <span className={s.Percentage}>12%</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
