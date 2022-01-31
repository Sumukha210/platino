import React from "react";
import styled from "styled-components";

const ExploreWellnessAndSpa = () => {
  return (
    <Wrapper className="component-inner-gap">
      <div className="container">
        <h1 className="heading-2 bold">
          In the heart of Platino, a total remise en forme system that connects
          all forms of well-being.
        </h1>
        <h6 className="caption-1">Explore Spa & Wellness</h6>
      </div>
    </Wrapper>
  );
};

export default ExploreWellnessAndSpa;

const Wrapper = styled.div`
  background-color: var(--primary-300);
  text-align: center;
  color: var(--light-color);

  .caption-1 {
    margin-top: 5rem;
  }
`;
