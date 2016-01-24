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

    renderHypothesis(hypothesis) {
        return e('div', { key: hypothesis }, hypothesis)
    }

    render() {
        return e('div', { style: this.style() },
                 e('h2', {}, 'Hypotheses'),
                 e('ul', {}, _.map(this.props.hypotheses, this.renderHypothesis.bind(this)))
        );
    }
}

export default HypothesisList;
