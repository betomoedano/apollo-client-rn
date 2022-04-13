import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useMutation, gql } from '@apollo/client';

const LIKE_POST = gql`
    mutation LikePost($likePostId: Int!) {
        likePost(id: $likePostId)
    }
`;

export default function Card({
    id,
    title,
    description,
    image,
    author,
    createdAt,
    refetch,
    likes,
}) {
    console.log(id)
    const [likePost] = useMutation(LIKE_POST, {
        variables: {
            likePostId: id
        },
        onCompleted: (data) => {console.log(data)},
    });

    // const handleLike = () => {
    //     likePost();
    //     refetch();
    // }

  return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{ uri: image }}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={[styles.button, {backgroundColor: '#FFEB81'}]}>
            <Text style={{fontWeight: '900', color: 'gray', fontSize: 18}}>{likes} likes</Text>
          </View>
          <TouchableOpacity onPress={likePost} style={styles.button}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>👍 </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({

  cardContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#00000030',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginVertical: 20
  },
  title: {
    color: '#181818',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#CDC5FF',
    width: '45%',
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  description: {
    color: '#181818',
    fontSize: 16,
  }
});