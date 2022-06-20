import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataContextProvider } from "./contexts/dataContext";

const root = ReactDOM.createRoot(document.getElementById('root') as any);
root.render(
    <DataContextProvider> <App /></DataContextProvider>
  
);