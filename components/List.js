import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useQuery, gql } from "@apollo/client";
import { AUTHOR_NAMES } from "../queries";
import Card from './Card';

const List = () => {

    const { loading, error, data } = useQuery(AUTHOR_NAMES);



    if(loading) return <Text>Loading</Text>
    if(error) return <Text>Error</Text>
    return data.posts.map(post => (
            <Card key={post.id}  {...post} />
    ))
}

export default List;