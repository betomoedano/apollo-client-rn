import * as React from 'react';
import List from "../components/List";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native';

const Home = () => {

    const navigation = useNavigation();
    
    return (
        <React.Fragment>
            <List />
            <Button title="Add" onPress={() => navigation.navigate("Add")} />
        </React.Fragment>
    );
}

export default Home;
