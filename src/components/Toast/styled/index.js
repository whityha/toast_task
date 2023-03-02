import styled, { css } from 'styled-components';

const generalStyle = css`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`;

export const Wrapper = styled.div`
    ${generalStyle};
    position: fixed;
    ${({ position: { left } }) =>
        left &&
        css`
            left: ${left}px;
        `};
    ${({ position: { top } }) =>
        top &&
        css`
            top: ${top}px;
        `};
    ${({ position: { right } }) =>
        right &&
        css`
            right: ${right}px;
        `};
    ${({ position: { bottom } }) =>
        bottom &&
        css`
            bottom: ${bottom}px;
        `};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 70px;
    padding: 12px 30px 12px 60px;
    border-radius: 10px;
    background: ${({ icon }) =>
        `url("${icon}") no-repeat left 10px center / 35px`};
    background-color: ${({ backgroundColor }) => backgroundColor};
    ${({ isClosing, animationDuration, animation: { open, close } }) =>
        isClosing
            ? css`
                  animation: ${close} ${animationDuration}ms ease forwards;
              `
            : css`
                  animation: ${open} ${animationDuration}ms ease;
              `}
`;

export const Title = styled.p`
    ${generalStyle};
    font-size: ${({ titleColor }) => titleColor}px;
    color: ${({ titleColor }) => titleColor};
    font-size: 20px;
`;

export const Description = styled.p`
    ${generalStyle};
    font-size: 14px;
    color: ${({ descriptionColor }) => descriptionColor};
    word-wrap: break-word;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    width: 15px;
    height: 15px;
    cursor: pointer;
    &:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 15px;
        height: 1px;
        background: white;
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 15px;
        height: 1px;
        background: white;
        transform: translate(-50%, -50%) rotate(45deg);
    }
`;
