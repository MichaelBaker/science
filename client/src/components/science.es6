import React           from 'react';
import { e }           from 'functions/react.es6';
import ObservationView from 'components/observation-view.es6';
import HypothesisList  from 'components/hypothesis-list.es6';

class Science extends React.Component {
    style() {
        return {
            display: 'flex'
        };
    }

    addHypothesis(i) {
        return (hypothesis) => { this.props.actions.addHypothesis(i, hypothesis) };
    }

    render() {
        let problem = this.props.data.getProblem('Problem 1');
        return e('div', { style: this.style() },
            e('h1', {}, problem.get('name')),
            e(ObservationView),
            e(HypothesisList, { addHypothesis: this.addHypothesis(0), hypotheses: problem.get('hypotheses') || [] })
        );
    }
}

export default Science;
