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

    render() {
        let problem = this.props.dataStore.getProblem('Problem 1');
        return e('div', { style: this.style() },
                e(ObservationView),
                e(HypothesisList, { hypotheses: problem.hypotheses || [] })
        );
    }
}

export default Science;
