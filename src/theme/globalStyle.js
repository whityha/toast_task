import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
    }
    body {
        transition: 0s;
    }
    a {
        color: inherit;
    }
    a:hover {
        text-decoration: underline;
    }
`;
