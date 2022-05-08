import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import '../node_modules/modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom'; // это маршрутизатор для обработки js страниц

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-07-phonebook/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
