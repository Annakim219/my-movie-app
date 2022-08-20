import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const LoadingContainer = styled.div`
  position: relative;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .spinner {
    width: 80px;
    height: 80px;
  }

  p {
    margin-top: 1em;
    font-size: 2em;
    color: white;
    letter-spacing: 0.3em;
    font-weight: bold;
  }
`;

function Loading() {
  return (
    <LoadingContainer>
      <Spinner className="spinner" animation="grow" variant="light" />
      <p>LOADING</p>
    </LoadingContainer>
  );
}

export default Loading;
