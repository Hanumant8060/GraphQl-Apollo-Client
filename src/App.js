import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import CreateVehicle from './CreateVehicle';

const client = new ApolloClient({
  uri:"http://localhost:8080/graphql"
}
);

const  App=()=> (
    <ApolloProvider client={client}>
    <div>
    <CreateVehicle/>
    </div>
    </ApolloProvider>
);
export default App;
