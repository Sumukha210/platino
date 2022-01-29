import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;

  .navbar__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--light-color);

    svg {
      height: 24px;
      width: 24px;
      vertical-align: bottom;
    }

    .menu span,
    .logo span,
    .bookNow span {
      cursor: pointer;
    }

    .menu span:last-child,
    .bookNow span:first-child {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }

    .menu span:first-child,
    .bookNow span:first-child {
      margin-right: 10px;
    }

    .menu {
      position: relative;
      z-index: 10001;
    }

    .bookNow {
      span:first-child {
        display: inline-block;
      }

      &:hover {
        span:first-child {
          transform: translateX(-10px);
        }
      }
      span {
        transition: transform 0.3s ease-in-out;
      }
    }

    .logo {
      text-align: center;
      span {
        display: block;
        font-family: var(--secondary-font);
        font-style: normal;

        &:first-child {
          font-weight: bold;
          font-size: 3rem;
          line-height: 64px;
        }

        &:last-child {
          font-weight: bold;
          font-size: 0.65rem;
          line-height: 13px;
          letter-spacing: 0.075em;
          margin-top: 4px;
        }
      }
    }
  }
`;
