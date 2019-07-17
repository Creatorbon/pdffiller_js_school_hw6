import React from 'react';

const withDelete = delay => (Component) => {
    class WithDelete extends React.Component {
        state = {
            isVisible: true
        };

        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    isVisible: false
                })
            }, delay)
        }

        render() {
            const { isVisible } = this.state;
            if (isVisible)
                return <Component {...this.props} />;
            else return null
        }
    }

    return WithDelete;
};

export default withDelete;