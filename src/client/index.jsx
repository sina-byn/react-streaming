import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';

// * components
import App from './App';

hydrateRoot(document.getElementById('app'), <App />);
