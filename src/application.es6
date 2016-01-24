import React     from 'react';
import ReactDOM  from 'react-dom';
import Science   from 'components/science.es6';
import DataStore from 'data-store.es6';

ReactDOM.render(React.createElement(Science, { dataStore: new DataStore() }), document.getElementById('main'));
