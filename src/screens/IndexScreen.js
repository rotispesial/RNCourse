import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <Button title= "Add Post" onPress={addBlogPost}/>
            <FlatList 
                data = {state}
                keyExtractor = {blogPost => blogPost.title}
                renderItem = {({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress = {() => deleteBlogPost(item.id)}>
                                <Feather name = "trash" style ={styles.iconStyle}/>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
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