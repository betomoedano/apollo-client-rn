import { SafeAreaView, StyleSheet} from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import List from './List';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

// client.query({
//   query: gql`
//     query myQuery {
//       books {
//         title
//       }
//     }
//   `
// }).then(res => console.log(res))

const App = () => {

  return (
    <SafeAreaView>
      <ApolloProvider client={client}>
        <List />
      </ApolloProvider>
    </SafeAreaView>
  );
}

// AppRegistry.registerComponent('my app', () => App)
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
