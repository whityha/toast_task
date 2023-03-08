import React from 'react';
import PropTypes from 'prop-types';

import { Description, Details, Title, Wrapper } from './styled';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorText: '',
            errorInfo: '',
        };
    }

    componentDidCatch(e, errorInfo) {
        this.setState({
            errorText: `${e}`,
            errorInfo,
        });
    }

    render() {
        const { errorText, errorInfo } = this.state;
        const { children } = this.props;
        return errorText ? (
            <Wrapper>
                <Title>Что-то пошло не так</Title>
                <Description>Упс, произошла ошибка {errorText}</Description>
                <Details>{errorInfo.componentStack}</Details>
            </Wrapper>
        ) : (
            children
        );
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};
