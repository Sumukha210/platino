import React from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

interface CustomBtnProps {
  isDarkBtn?: boolean;
}

interface btnType extends CustomBtnProps {
  name: string;
  Icon?: IconType;
}

const Button: React.FC<btnType> = ({ name, Icon, isDarkBtn = true }) => {
  return (
    <CustomBtn isDarkBtn={isDarkBtn}>
      <span>{name}</span>
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
    </CustomBtn>
  );
};

export default Button;

const CustomBtn = styled.button<CustomBtnProps>`
  padding: 1rem 2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  background: transparent;
  border: 1px solid
    var(${props => (props.isDarkBtn ? "--dark-color" : "--light-color")});
  color: var(${props => (props.isDarkBtn ? "--dark-color" : "--light-color")});
  position: relative;
  z-index: 2;
  transition: all 0.4s ease-in;

  &::before {
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 0%;
    height: 100%;
    background: var(
      ${props => (props.isDarkBtn ? "--dark-color" : "--light-color")}
    );
    z-index: -1;

    transition: width 0.4s ease-in;
  }

  &:hover {
    &::before {
      width: 100%;
    }

    color: var(--secondary-400);
    border-color: var(--primary-300);
  }

  span {
    &:not(:first-child) {
      margin-left: 1rem;
    }

    &:last-child {
      svg {
        vertical-align: middle;
        height: 24px;
        width: 24px;
      }
    }
  }
`;
