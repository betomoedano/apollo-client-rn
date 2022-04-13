import * as React from 'react';
import List from "../components/List";
import { useNavigation } from "@react-navigation/native";
import { Button, ScrollView } from 'react-native';

const Home = () => {

    const navigation = useNavigation();
    
    return (
        <React.Fragment>
            <ScrollView 
                contentContainerStyle={{
                    paddingVertical: 30,
                    alignItems: 'center',
                }} 
            >
                <List />
                <Button title="Add" onPress={() => navigation.navigate("Add")} />
            </ScrollView>
        </React.Fragment>
    );
}

export default Home;
