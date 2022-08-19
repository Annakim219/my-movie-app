import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useMemo, useRef, useState } from "react";

function Movie({ coverImg, title, summary, genres, id }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const textLimit = useRef(235);

  const commenter = useMemo(() => {
    const shortReview = summary.slice(0, textLimit.current);

    if (summary.length > textLimit.current) {
      if (isShowMore) {
        return summary;
      }
      return shortReview;
    }
    return summary;
  }, [isShowMore]);

  return (
    <Col lg={6} xs={12}>
      <div>
        <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <div>
          <span>{commenter}</span>
          <span onClick={() => setIsShowMore(!isShowMore)}>
            {summary.length > textLimit.current &&
              (isShowMore ? null : `  [...Read More]`)}
          </span>
        </div>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </Col>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
