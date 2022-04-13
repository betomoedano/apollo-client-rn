import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import List from './components/List';
import Add from './screens/Add';
import Home from './screens/Home';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} options={{presentation: 'modal', title: 'Create Post'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
      <ApolloProvider client={client}>
          <MyStack />
      </ApolloProvider>
  );
}

export default App;
