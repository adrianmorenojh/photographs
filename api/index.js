import React from 'react'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
const client = new ApolloClient({
    uri:""
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)