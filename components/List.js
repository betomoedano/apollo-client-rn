import * as React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useQuery, gql } from "@apollo/client";
import { AUTHOR_NAMES } from "../queries";
import Card from './Card';

const List = () => {

    // const { loading, error, data, refetch } = useQuery(AUTHOR_NAMES);
    // reFetching data every second
    const { loading, error, data} = useQuery(AUTHOR_NAMES, {pollInterval: 1000});

    if(loading) return <Text>Loading</Text>
    if(error) return <Text>Something is wrong with the server</Text>
    return (
        <React.Fragment>
            <ScrollView 
                contentContainerStyle={{
                    paddingVertical: 30,
                    alignItems: 'center',
                    backgroundColor: '#FAF5F0'
                    // backgroundColor: 'papayawhip'
                }} 
            >
                 <Text style={{fontSize: 26, fontWeight: '900', color: '#00000090'}}>This are the News</Text>
                {    data.posts.map(post => ( <Card key={post.id}  {...post} />))
}
            </ScrollView>
        </React.Fragment>
    )
}

export default List;