import * as React from 'react';
import List from "../components/List";
import { useNavigation } from "@react-navigation/native";
import { Button, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {

    const navigation = useNavigation();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Add')}
                >
                    <Ionicons name="add-circle-sharp" size={35} color="#181818" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    
    return <List />
        
}

export default Home;
