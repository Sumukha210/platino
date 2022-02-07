import styled from "styled-components";
import { wrapperProps } from "./types";

export const Wrapper = styled.div<wrapperProps>`
  background-color: var(${props => props.bgColor || "--light-color"});
  color: var(${props => props.textColor || "--dark-color"});
  padding-bottom: 9rem;

  .mainRow {
    flex-flow: ${props => (props.rowReverse ? "row-reverse" : "initial")};
  }

  .left {
    position: relative;

    .largeImg {
      width: 85%;
      margin-left: ${props => (props.rowReverse ? "auto" : "initial")};
      & > span {
        height: 550px !important;
      }
    }

    .smallImg {
      position: absolute;
      position: absolute;
      bottom: -82px;
      right: ${props => (props.rowReverse ? "initial" : "0%")};
      left: ${props => (!props.rowReverse ? "initial" : "0%")};
      width: 235px;

      & > span {
        height: 235px !important;
      }
    }
  }

  .right {
    .para {
      margin-top: 1.5rem;
    }
  }
`;
