import styled from "styled-components";
import { bannerProp } from ".";

export const Banner = styled.div<bannerProp>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),
    url(${props => props.bannerImg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: calc(80vh + 150px);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  .title {
    color: var(--light-color);
    font-family: var(--secondary-font);
    margin-bottom: 3rem;
    overflow: hidden;

    span {
      display: block;
      visibility: hidden;
      opacity: 0;
      transform: translateY(220px);
    }
  }
  button {
    transform: translateY(40px);
    opacity: 0;
    visibility: hidden;
  }
`;
