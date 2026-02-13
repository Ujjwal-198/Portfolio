import React from 'react';
import styled from 'styled-components';

type SwitchProps = {
    size?: number;
    invert?: boolean;
    primary?: string;
    secondary?: string;
    solid?: boolean;
};

const Switch = ({
    size = 10,
    invert = false,
    primary,
    secondary,
    solid = false,
}: SwitchProps) => {
    const resolvedPrimary = primary ?? (invert ? "#fff" : "#000");
    const resolvedSecondary =
        secondary ?? (solid ? resolvedPrimary : invert ? "#000" : "#fff");

    return (
        <StyledWrapper
            $size={size}
            $primary={resolvedPrimary}
            $secondary={resolvedSecondary}
            $solid={solid}
        >
            <input type="checkbox" role="switch" className="liquid-3" />
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div<{
    $size: number;
    $primary: string;
    $secondary: string;
    $solid: boolean;
}>`
  font-size: ${(props) => props.$size}px;
  --primary: ${(props) => props.$primary};
  --secondary: ${(props) => props.$secondary};

  .liquid-3 {
    --time: 0.6s;
    appearance: none;
    position: relative;
    cursor: pointer;
    width: 10em;
    aspect-ratio: 2 / 1;
    background: var(--primary);
    border-radius: 20em;
    box-shadow: ${(props) =>
        props.$solid ? "none" : "0 0 0 1em var(--secondary)"};
    transform: translateX(0.5px);
    transition: transform var(--time) cubic-bezier(0.75, 0, 0.75, 50);
    filter: ${(props) => (props.$solid ? "none" : "blur(0.66em) contrast(20)")};
    mix-blend-mode: ${(props) => (props.$solid ? "normal" : "darken")};
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      width: 200%;
      height: 100%;
      transform: translate(-25%, -50%);
      left: 50%;
      top: 50%;
      background: radial-gradient(
          closest-side circle at 12.5% 50%,
          var(--secondary) 50%,
          #0000 0
        ),
        radial-gradient(
          closest-side circle at 87.5% 50%,
          var(--secondary) 50%,
          #0000 0
        ),
        #f000;
      transition: transform var(--time) cubic-bezier(0.75, 0, 0.75, 1.3);
    }

    &:checked {
      transform: translateX(-0.5px);
      &::before {
        transform: translate(-75%, -50%);
      }
    }

    ${(props) =>
        props.$solid &&
        `
      &::before {
        opacity: 0;
      }

      &::after {
        content: "";
        position: absolute;
        width: 45%;
        height: 75%;
        left: 7%;
        top: 50%;
        transform: translateY(-50%);
        background: var(--secondary);
        border-radius: 999px;
        transition: left var(--time) cubic-bezier(0.75, 0, 0.75, 1.3);
      }

      &:checked::after {
        left: 48%;
      }
    `}
  }`;

export default Switch;
