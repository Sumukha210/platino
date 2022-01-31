import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--secondary-200);
  color: var(--dark-color);

  .left {
    .caption {
      color: #908f8a;
    }

    .title {
      margin-bottom: 1rem;
    }
  }

  .right {
    .feature {
      display: flex;
      margin-bottom: 2rem;
    }

    span {
      display: block;
    }

    svg {
      height: 32px;
      width: 32px;
      vertical-align: top;
      margin-right: 1rem;
    }
  }
`;
