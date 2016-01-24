import _ from 'lodash';

class DataStore {
    constructor() {
        this.problems = [{ name: 'Problem 1', hypotheses: ['a', 'b', 'c']}];
    }

    getProblem(name) {
        return _.find(this.problems, (problem) => problem.name === name)
    }
}

export default DataStore;
