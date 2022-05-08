import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import '../node_modules/modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom'; // это маршрутизатор для обработки js страниц
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
