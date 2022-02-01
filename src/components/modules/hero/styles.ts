import styled from "styled-components";
import bannerImg from "@/assets/images/banner.jpg";

export const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),
    url(${bannerImg.src});
  background-position: 100% 100%;
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
