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
    const [image, setImage] = React.useState('');
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

    function handlePublish() {
        console.log(title);
        console.log(description);
        console.log(image);
        console.log(author);
    }

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
                    placeholder="Image uri" style={styles.textInput} />
            </View>
            <Button title="Publish" onPress={createPost}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    inputContainer: {
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
    },
    textInput: {
      paddingLeft: 10,
      flex: 1,
      height: 50,
    },
  });