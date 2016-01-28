import _               from 'lodash';
import { createStore } from 'redux';
import Immutable       from 'immutable';

let I = Immutable.fromJS;

export class DataStore {
    static default() {
        return new DataStore(
            I({ problems: [makeProblem('Problem 1', ['a', 'b', 'c'])] })
        );
    }

    static reducer(state = DataStore.default(), action) {
        switch (action.type) {
            case 'addHypothesis':
                return state.addHypothesis(action.data);
            default:
                return state;
        };
    }

    constructor(state) {
        this.state = state;
    }

    getProblem(name) {
        return this.state.get('problems').find((problem) => problem.get('name') === name);
    }

    addHypothesis(attrs) {
        return new DataStore(this.state.updateIn(['problems', attrs.problem, 'hypotheses'], (list) => {
            if (list) {
                return list.push(attrs.hypothesis);
            }
        }));
    }
}

function makeProblem(name, hypotheses) {
    return I({ name, hypotheses });
}

export function createDataStore() {
    let store   = createStore(DataStore.reducer);
    let actions = {
        addHypothesis: (problem, hypothesis) => store.dispatch({ type: 'addHypothesis', data: { problem, hypothesis } })
    };
    return { store: store, actions: actions }
};
