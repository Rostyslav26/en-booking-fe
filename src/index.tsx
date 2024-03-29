import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
	<Provider store={store}>
		<ColorModeScript />
		<App />
	</Provider>,
);

serviceWorker.unregister();

reportWebVitals();
