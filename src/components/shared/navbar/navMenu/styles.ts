import styled from "styled-components";

export interface RightSideType {
  background: string | null;
}

export const NavWrapper = styled.div`
  position: fixed;
  right: 0%;
  width: 0%;
  height: 100vh;
  z-index: 10000;
  /* transform: translateX(120vw); */
  background-color: var(--secondary-400);
`;

export const Grid = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PersonalInfoBlock = styled.div`
  position: relative;
  .custom-container {
  }
  .content {
    position: absolute;
    bottom: 2rem;
    color: var(--light-color);
  }
`;

export const LeftSide = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 4rem;

  @media (min-width: 576px) {
    margin-left: auto;
  }

  @media (max-width: 575.98px) {
    padding: 5rem 32px;
  }

  .menuName {
    margin-bottom: 1.5rem;
    cursor: pointer;
    font-weight: 600 !important;
    color: var(--light-color);
  }
`;

export const RightSide = styled.div`
  position: relative;
  height: 100vh;

  @media (min-width: 768px) {
    .img {
      background-size: cover !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
      height: 100vh !important;
      width: 100% !important;
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--light-color);
  z-index: 3;
`;
