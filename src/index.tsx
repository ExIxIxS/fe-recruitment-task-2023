import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import appStore from './appStore/reduxStore';
import { Provider } from 'react-redux';

import App from './pages/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </StrictMode>
);
