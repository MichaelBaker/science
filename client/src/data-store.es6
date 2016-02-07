import _               from 'lodash';
import { createStore } from 'redux';
import Immutable       from 'immutable';

let I = Immutable.fromJS;

const Actions = {
  MoveObservation: 'move_observation',
  AddObservation:  'add_observation',
}

function def() {
  return I({ observations: I([]) })
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
  } else if (action.type === Actions.AddObservation) {
    const numObservations = state.get('observations').size
    return state.update('observations', os => os.push(I({ id: numObservations, order: numObservations, type: 'text', content: action.content })))
  } else {
    return state
  }
}

export function createDataStore() {
  let store   = createStore(reducer)
  let actions = {
    moveObservation: (observationId, oldOrder, newOrder) => store.dispatch({ type: Actions.MoveObservation, observationId, oldOrder, newOrder }),
    addObservation:  (content) => store.dispatch({ type: Actions.AddObservation, content })
  }
  return { store: store, actions: actions }
};
