import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ( {navigation} ) => {

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const {addBlogPost} = useContext(Context);
 
    return (
        <View>
            <Text style = {styles.labelStyle}>Enter title</Text>
            <TextInput 
                style = {styles.inputStyle}
                value = {title} 
                onChangeText = {(text) => setTitle(text)}   
            />
            <Text style = {styles.labelStyle}>Content Body: </Text>
            <TextInput 
                value = {content} 
                onChangeText = {(text) => setContent(text)} 
                style = {styles.inputStyle}
            />
            <Button 
                title="Save Blog Post"
                style={styles.buttonStyle}
                onPress = {() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                }}
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