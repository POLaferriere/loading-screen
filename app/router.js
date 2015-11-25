import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import Dots from './components/dots';

ReactDOM.render((
	<Router>
		<Route path='/' component={Dots}>
		</Route>
	</Router>
), document.getElementById('application'));
