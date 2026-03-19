import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { AlertProvider } from './context/alertContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <AlertProvider>
      <App />
    </AlertProvider>
  </ChakraProvider>
);