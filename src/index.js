import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Foundation JS relies on a global varaible.
// In ES6, all imports are hoisted to the top of the file
// so if we used `import` to import Foundation, it would
// execute earlier than we have assigned the global
// variable. This is why we have to use CommonJS require()
// here since it doesn't have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

$(document).foundation();
