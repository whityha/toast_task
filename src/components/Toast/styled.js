import styled, { css } from 'styled-components';

import getAnimation from '../../utils/getAnimation';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${({ theme: { width } }) => width.max}px;
    height: ${({ theme: { height } }) => height.medium}px;
    padding: ${({
        theme: {
            padding: { p1, p3, p6 },
        },
    }) => `${p1}px ${p3}px ${p1}px ${p6}px`};
    margin-bottom: ${({ theme: { margin } }) => margin.m1}px;
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.min}px;
    background: ${({ icon }) =>
        `url("${icon}") no-repeat left 10px center / 35px`};
    background-color: ${({ backgroundColor }) => backgroundColor};
    ${({ translate }) =>
        translate
            ? css`
                  left: ${translate.translateX};
                  top: ${translate.translateY};
              `
            : ''};
    ${({
        isClosing,
        isForceClosing,
        animation: { open, close },
        theme: { animationDuration },
        position,
    }) => {
        if (isForceClosing) {
            const animation = getAnimation('slide', position);
            return css`
                animation: ${animation.close} ${animationDuration}ms ease
                    forwards;
            `;
        }
        return isClosing
            ? css`
                  animation: ${close} ${animationDuration}ms ease forwards;
              `
            : css`
                  animation: ${open} ${animationDuration}ms ease;
              `;
    }};

    &:last-child {
        margin-bottom: 0px;
    }
`;

export const Title = styled.p`
    color: ${({ color }) => color};
    font-size: ${({ theme: { fontSize } }) => fontSize.max}px;
`;

export const Description = styled.p`
    font-size: ${({ theme: { fontSize } }) => fontSize.min}px;

    color: ${({ color }) => color};
    word-wrap: break-word;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    width: ${({ theme: { closeButtonSize } }) => closeButtonSize.medium}px;
    height: ${({ theme: { closeButtonSize } }) => closeButtonSize.medium}px;
    cursor: pointer;
    &:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: ${({ theme: { closeButtonSize } }) => closeButtonSize.medium}px;
        height: 1px;
        background: ${({ color }) => color};
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: ${({ theme: { closeButtonSize } }) => closeButtonSize.medium}px;
        height: 1px;
        background: ${({ color }) => color};
        transform: translate(-50%, -50%) rotate(45deg);
    }
`;
