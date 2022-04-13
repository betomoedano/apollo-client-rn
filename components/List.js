import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useQuery, gql } from "@apollo/client";
import { AUTHOR_NAMES } from "../queries";
import Card from './Card';

const List = () => {

    const { loading, error, data, refetch } = useQuery(AUTHOR_NAMES);
    // reFetching data every second
    // const { loading, error, data, refetch } = useQuery(AUTHOR_NAMES, {pollInterval: 1000});

    if(loading) return <Text>Loading</Text>
    if(error) return <Text>Error</Text>
    return data.posts.map(post => ( <Card key={post.id}  {...post} refetch={refetch} />))
}

export default List;