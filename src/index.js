import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import '@fontsource/bitter/400.css';
import '@fontsource/bitter/variable.css';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

import 'normalize.css';
import './css/global.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));
