import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { ApolloProvider } from '@apollo/client';
import RickAndMortyClient from './apollo-client.ts';

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={RickAndMortyClient}>
    <StrictMode>
      <App />
    </StrictMode>,
  </ApolloProvider>
)
