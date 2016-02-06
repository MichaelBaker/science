import _               from 'lodash';
import { createStore } from 'redux';
import Immutable       from 'immutable';

let I = Immutable.fromJS;

const Actions = {
  MoveObservation: 'move_observation',
}

function def() {
  const textObservations = _.range(20).map((i) => {
    return { id: i, order: i, type: 'text', content: `Hello` }
  })

  return I({ observations: textObservations })
}

function reducer(state = def(), action) {
  if (action.type === Actions.MoveObservation) {
    const targetObs = state.get('observations').find(o => o.get('id') === action.observationId)
    if (targetObs.get('order') === action.newPosition) return state

    return state.updateIn(['observations'], (os) => {
      return os.map((o) => {
        if (o.get('id') === action.observationId) {
          return o.set('order', action.newPosition)
        } else if (o.get('order') >= action.newPosition) {
          return o.update('order', p => p + 1)
        } else {
          return o
        }
      })
    })
  } else {
    return state
  }
}

export function createDataStore() {
  let store   = createStore(reducer)
  let actions = { moveObservation: (oid, position) => store.dispatch({ type: Actions.MoveObservation, observationId: oid, newPosition: position }) }
  return { store: store, actions: actions }
};
