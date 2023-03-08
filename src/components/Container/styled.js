import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    display: block;
`;

export const WrapperPosition = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
`;
