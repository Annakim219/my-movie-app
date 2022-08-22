import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { BsFillStarFill } from "react-icons/bs";

const DetailStyle = createGlobalStyle`
  body {
    height: 100vh;
    background: url(${(props) => props.bgImg});
    background-size: cover;
    background-blend-mode: darken;
    }
`;

const MovieContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 250px;
  img {
    border: 5px solid white;
    border-radius: 10px;
  }
`;

const MovieContent = styled.div`
  padding-left: 40px;
  border: 1px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  p {
    text-align: left;
    margin-left: 30px;
    font-size: 1.3em;
    margin-bottom: 0;
    font-weight: 200;
  }

  .title {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .description {
    font-size: 1em;
    font-weight: 300;
    margin-top: 20px;
  }

  ul {
    list-style: none;
    font-size: 1.3em;
    font-weight: 200;

    li {
      float: left;
      margin-right: 15px;
    }
  }

  .starIcon {
    color: yellow;
    font-size: 0.8em;
    margin-bottom: 3px;
  }

  span {
    font-size: 0.9em;
    margin-left: 5px;
  }
`;

const MovieDetail = ({
  title,
  runtime,
  genres,
  description,
  coverImg,
  bgImg,
  year,
  rating,
}) => {
  return (
    <>
      <DetailStyle bgImg={bgImg} />
      <MovieContainer>
        <img src={coverImg} alt={title} />
        <MovieContent>
          <p className="title">{title}</p>
          <p>{year}</p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>
            <BsFillStarFill className="starIcon" />
            <span>{`   ${rating}`}</span>
          </p>
          <p className="description">{description}</p>
        </MovieContent>
      </MovieContainer>
    </>
  );
};

export default MovieDetail;
