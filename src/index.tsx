import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.scss';
import App from './app';

const el = document.getElementById('root')
const root = createRoot(el!)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)