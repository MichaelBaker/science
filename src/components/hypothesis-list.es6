import React from 'react';
import { e } from 'functions/react.es6';

class HypothesisList extends React.Component {
    style() {
        return {
            background: 'red',
            flex:       '0 0 350px'
        };
    }

    render() {
        return e('div', { style: this.style() },
            e('h2', {}, 'Hypotheses')
        );
    }
}

export default HypothesisList;
