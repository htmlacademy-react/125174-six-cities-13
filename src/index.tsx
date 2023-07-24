import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { offerPreviewList } from './mocks/offer.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={offerPreviewList}/>
  </React.StrictMode>
);
