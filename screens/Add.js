import * as React from 'react';
import { SafeAreaView, Text, Button, View, TextInput, StyleSheet} from 'react-native';
import { gql, useMutation } from '@apollo/client';

const CREATE_POST = gql`
    mutation CreatePostMutation($title: String!, $description: String!, $image: String!, $author: String!) {
    addPost(title: $title, description: $description, image: $image, author: $author) {
        id
        title
        description
        author
        image
        likes
        createdAt
    }
    }
`;

export default function Add() {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('https://images.unsplash.com/photo-1592182383627-0483b246e5cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80');
    const [author, setAuthor] = React.useState('');

    const [createPost] = useMutation(CREATE_POST, {
        variables: {
            title,
            description,
            image,
            author
        },
        onCompleted: (data) => {console.log(data)},
    });


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={setTitle} 
                    placeholder="Title" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={setDescription}
                    placeholder="Description" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={setAuthor}
                    placeholder="author" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={setImage}
                    value={image}
                    placeholder="Image uri" style={styles.textInput} />
            </View>
            <Button title="Publish" onPress={createPost}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAF5F0',
      alignItems: 'center',
    },
    inputContainer: {
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      paddingHorizontal: 10,
      borderRadius: 10,
      backgroundColor: '#ECE6E0',
    },
    textInput: {
      paddingLeft: 10,
      flex: 1,
      height: 50,
      fontWeight: 'bold',
      fontSize: 16,
      color: '#00000090',
    },
  });