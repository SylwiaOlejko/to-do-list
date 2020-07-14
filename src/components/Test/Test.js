import React from 'react';

class Test extends React.Component {

    render() {
        return (
        <div>{this.props.liczba} TEST- {this.props.tekst}</div>
        );
    }

}

export default Test; 