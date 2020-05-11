import React from 'react';

class MainError extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedSTateFromError(e) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>Could not display "main" content.</h2>
            );
        }
        return this.props.children;
    }
}

export default MainError;