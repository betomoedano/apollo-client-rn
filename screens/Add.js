import * as React from 'react';
import { SafeAreaView, Text, Button, View, TextInput, StyleSheet} from 'react-native';


export default function Add() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Title" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Description" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="author" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Image uri" style={styles.textInput} />
            </View>
            <Button title="Publish"/>
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