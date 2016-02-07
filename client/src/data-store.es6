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
    const { newOrder, oldOrder, observationId } = action
    const otherObs  = state.get('observations').filter(o => o.get('id') !== observationId)
    const targetObs = state.get('observations').filter(o => o.get('id') === observationId)
    const obsBefore = otherObs.take(newOrder)
    const obsAfter  = otherObs.skip(newOrder)
    const newObs    = obsBefore.concat(targetObs).concat(obsAfter)

    return state.set('observations', newObs.map((o, i) => o.set('order', i)))
  } else {
    return state
  }
}

export function createDataStore() {
  let store   = createStore(reducer)
  let actions = { moveObservation: (observationId, oldOrder, newOrder) => store.dispatch({ type: Actions.MoveObservation, observationId, oldOrder, newOrder }) }
  return { store: store, actions: actions }
};
