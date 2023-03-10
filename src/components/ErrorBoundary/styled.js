import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const generalStyle = `
    color: black;
    margin: 0 auto;
`;
export const Title = styled.h1`
    ${generalStyle}
`;

export const Description = styled.h2`
    ${generalStyle}
`;

export const Details = styled.p`
    color: black;
`;
