import _     from 'lodash';
import React from 'react';
import { e } from 'functions/react.es6';

class HypothesisList extends React.Component {
    style() {
        return {
            background: 'red',
            flex:       '0 0 350px'
        };
    }

    renderHypothesis(hypothesis, i) {
        return e('div', { key: i }, hypothesis);
    }

    render() {
        return e('div', { style: this.style() },
            e('h2', { onClick: () => this.props.addHypothesis('hello') }, 'Hypotheses'),
            e('ul', {}, this.props.hypotheses.map(this.renderHypothesis.bind(this)))
        );
    }
}

export default HypothesisList;
