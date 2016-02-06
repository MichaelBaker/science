import _               from 'lodash';
import { createStore } from 'redux';
import Immutable       from 'immutable';

let I = Immutable.fromJS;

export class DataStore {
    static default() {
      const textObservations = _.range(20).map((i) => {
        return { id: i, type: 'text', content: `This is box #${i}` }
      })

      return new DataStore(
        I({ observations: textObservations })
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
