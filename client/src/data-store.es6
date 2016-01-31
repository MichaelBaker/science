import _               from 'lodash';
import { createStore } from 'redux';
import Immutable       from 'immutable';

let I = Immutable.fromJS;

export class DataStore {
    static default() {
      return new DataStore(
        I({ observations: [] })
      )
    }

    static reducer(state = DataStore.default(), action) {
      return state
    }

    constructor(state) {
      this.state = state
    }
}

export function createDataStore() {
    let store   = createStore(DataStore.reducer)
    let actions = {}
    return { store: store, actions: actions }
};
