import React from 'react';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { cache } from './cache';

import Dashboard from './components/organisms/Dashboard';

const client = new ApolloClient({
    uri: '/graphql',
    cache,
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Dashboard />
        </ApolloProvider>
    );
};

export default App;
