import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="row justify-center">
          <div className="col-md-10 col-lg-8">
            <h2 className="heading-3">
              Nestled in the middle of natural beauty, Platino allows you to
              find peace from the hustle and bustle of everyday life and relax
              in a breathtaking ambience.
            </h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Intro;

const Wrapper = styled.div`
  color: var(--dark-color);

  h2 {
    text-align: center;
  }
`;
