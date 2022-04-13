import { Text, View, Image } from 'react-native';
import { useQuery, gql } from "@apollo/client";
import { AUTHOR_NAMES } from "../queries";

const List = () => {

    const { loading, error, data } = useQuery(AUTHOR_NAMES);



    if(loading) return <Text>Loading</Text>
    if(error) return <Text>Error</Text>
    return data.posts.map(post => (
        <View key={post.id} style={{borderWidth: 1, borderColor: 'papayawhip', padding: 10, alignItems: 'center'}}>
            <Text >{post.title}</Text>
            <Image source={{uri: post.image}} style={{width: 100, height: 100, borderRadius: 10, margin: 10}} />
            <Text >{post.description}</Text>
            <Text >{post.likes} likes</Text> 
        </View>
    ) 
    )
}

export default List;