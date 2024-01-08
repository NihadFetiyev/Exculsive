import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';
import UserProvider from './context/userContext';
import WishlistProvider from './context/WishlistContext';
import BasketProvider from './context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <WishlistProvider>
      <BasketProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BasketProvider>
    </WishlistProvider>
  </UserProvider>
);