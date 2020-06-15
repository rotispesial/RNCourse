import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {

    const {state, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <FlatList 
                data = {state}
                keyExtractor = {blogPost => blogPost.title}
                renderItem = {({ item }) => {
                    return (
                        <TouchableOpacity onPress = {() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.titleStyle}>Title: {item.title} ID: {item.id}</Text>
                                <TouchableOpacity onPress = {() => deleteBlogPost(item.id)}>
                                    <Feather name = "trash" style ={styles.iconStyle}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

//For some reason the plus in the index screen isn't working

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
    
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 5,
        marginHorizontal: 5,
        backgroundColor: '#FFFFFF'

    },
    iconStyle: {
        fontSize: 24,
        marginRight: 7,
        alignSelf: 'center'
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 7,
        alignSelf: 'center'
    }

});

export default IndexScreen;