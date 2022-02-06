import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  /* background-color: var(--secondary-100); */

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
        margin-top: 2rem;
        margin-bottom: 2.5rem;

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
