import React from 'react';
// import ReactDOM from 'react-dom';

const withDelete = delay => (Component) => {
    class withDelete extends React.Component {
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

    return withDelete;
};

export default withDelete;