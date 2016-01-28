import React               from 'react';
import ReactDOM            from 'react-dom';
import Science             from 'components/science.es6';
import { createDataStore } from 'data-store.es6';

var evtSource = new EventSource("http://localhost:9001");
evtSource.onmessage = function(e) {
    console.log(JSON.parse(e.data));
}

let { store, actions } = createDataStore();

let render = () => {
    ReactDOM.render(
        React.createElement(Science, { actions: actions, data: store.getState() }),
        document.getElementById('main')
    );
};

render();
store.subscribe(render);
