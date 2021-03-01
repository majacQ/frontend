import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { cache } from './cache/cache';

import Dashboard from './components/organisms/Dashboard';
import './index.css';

const client = new ApolloClient({
    uri: 'https://localhost:5000',
    cache,
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Dashboard />
        </ApolloProvider>
    );
};

render(<App />, document.getElementById('root'));
