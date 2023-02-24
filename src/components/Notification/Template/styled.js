import styled, { css } from 'styled-components';
// import Theme from '../../../theme';

const generalStyle = css`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`;

export const Wrapper = styled.div`
    ${generalStyle};
    position: absolute;
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
    justify-content: center;
    width: 300px;
    height: 70px;
    padding-left: 60px;
    border-radius: 10px;
    background: url(${({ icon }) => icon}) no-repeat left 10px center / 35px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Title = styled.p`
    ${generalStyle};
    font-size: ${({ titleColor }) => titleColor}px;
    color: ${({ titleColor }) => titleColor};
    font-size: 20px;
    padding-bottom: 10px;
`;

export const Description = styled.p`
    ${generalStyle};
    font-size: 14px;
    color: ${({ descriptionColor }) => descriptionColor};
`;
