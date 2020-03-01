import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import MyProvider from './contexts/context';
import ModalProvider from './contexts/modalContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<MyProvider>
		<ModalProvider>
			<Router />
		</ModalProvider>
	</MyProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
