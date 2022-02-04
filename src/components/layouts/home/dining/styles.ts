import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0%;
    top: 0%;
    height: 100%;
    background-color: var(--secondary-300);
    z-index: -1;

    width: 30%;

    @media (max-width: 991.98px) {
      height: 400px;
      width: 100%;
    }
  }

  .row {
    align-items: center;

    .left {
      & > span {
        height: 700px !important;
      }
      img {
        height: 100% !important;
      }

      & > span > span {
        @media (max-width: 991.98px) {
          max-height: 600px;
        }
      }
    }

    .right {
      color: var(--dark-color);
      @media (max-width: 991.98px) {
        width: 70%;

        .caption {
          margin-top: 2rem;
        }
      }

      @media (max-width: 575.98px) {
        width: 95%;
      }

      .sub-title {
        margin-top: 1rem;
      }

      .options {
        margin: 2rem 0;

        h6 {
          position: relative;

          &::after {
            content: "";
            display: block;
            height: 3px;
            margin: 24px 0;
            background-color: var(--dark-color);
          }
        }
      }
    }
  }
`;
