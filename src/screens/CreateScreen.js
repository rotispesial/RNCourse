import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ( {navigation} ) => {

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');
 
    return (
        <View>
            <Text style = {styles.labelStyle}>Enter title</Text>
            <TextInput 
                value = {title} 
                onChangeText = {(text) => setTitle(text)} 
                style = {styles.inputStyle}
            />
            <Text style = {styles.labelStyle}>Content Body: </Text>
            <TextInput 
                value = {content} 
                onChangeText = {(text) => setContent(text)} 
                style = {styles.inputStyle}
            />
            <Button 
                title="Add Post"
                style={styles.buttonStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle:{
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 7,
        paddingTop: 7,
        marginHorizontal: 7,
        marginVertical: 7,
        backgroundColor: 'white'
    },
    labelStyle:{
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 3,
        marginLeft: 3
    },
    buttonStyle:{
        fontWeight: 'bold',
        fontSize: 26
    }

});

export default CreateScreen;