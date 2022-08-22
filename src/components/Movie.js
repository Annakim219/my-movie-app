import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useMemo, useRef, useState } from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 500px;
  height: ${(props) => (props.isShowMore === false ? "250px" : "auto")};
  margin: 65px auto 40px auto;
  padding: 20px;
  padding-bottom: 40px;
  background-color: #f0f5f9;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  img {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
    width: 6em;
    height: 9em;
    position: relative;
    top: -40px;
  }
`;

const MovieText = styled.div`
  margin-left: 1.5em;

  .commenter {
    font-size: 0.9em;
    letter-spacing: -0.2px;
    line-height: 140%;
    color: #1e2022;
  }

  span {
    color: dimgray;
    font-size: 0.8em;
  }

  ul {
    font-size: 0.8em;
    line-height: 120%;
    margin: 1em 0 0 -3.2em;
    list-style: none;
    color: darkgray;
    font-weight: 600;

    li {
      float: left;
      margin-left: 10px;
    }
  }
`;

const MovieTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin: 15px 0 10px 0;
  a {
    color: #52616b;
    text-decoration: none;
  }
`;

function Movie({ coverImg, title, summary, genres, id }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const textLimit = useRef(155);

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

  console.log(isShowMore);

  return (
    <Col md={6} xs={12}>
      <ListContainer isShowMore={isShowMore}>
        <img src={coverImg} alt={title} />
        <MovieText>
          <MovieTitle>
            <Link to={`/movie/${id}`}>{title}</Link>
          </MovieTitle>
          <div className="commenter">
            {commenter}
            <span onClick={() => setIsShowMore(!isShowMore)}>
              {summary.length > textLimit.current &&
                (isShowMore ? ` [Close]` : `... [Read More]`)}
            </span>
          </div>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </MovieText>
      </ListContainer>
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
