import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const DetailStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    background:url(${(props) => props.bgImg});
    margin: 0;
    background-size: cover;
  }
`;

const MovieContainer = styled.div`
  height: 50vh;
  border: 3px solid;
  display: flex;
  flex-direction: row;
`;

const MovieContent = styled.div`
  margin: 20px;
`;

const MovieDetail = ({
  title,
  runtime,
  genres,
  description,
  coverImg,
  bgImg,
}) => {
  console.log(coverImg);
  return (
    <DetailStyle bgImg={bgImg}>
      <MovieContainer>
        <img src={coverImg} />
        <MovieContent>
          <p>{title}</p>
        </MovieContent>
      </MovieContainer>
    </DetailStyle>
  );
};

export default MovieDetail;
