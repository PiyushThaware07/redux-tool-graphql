import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store/store';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ApolloProvider client={apolloClient} >
            <App />
        </ApolloProvider>
    </Provider>
)
