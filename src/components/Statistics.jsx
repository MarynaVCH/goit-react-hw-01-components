import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section class="statistics">
      {title && <h2 class="title">Upload stats</h2>}

      <ul class="stat-list">
        {stats.map(stat => (
          <li class="item" key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
