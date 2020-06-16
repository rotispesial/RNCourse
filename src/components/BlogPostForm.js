import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title);

    const [content, setContent] = useState(initialValues.content);

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
                title = "Save Post"
                onPress = {() => onSubmit(title, content)}
            />
        </View>
    );

};

//This is some default property values so that the app doesn't crash when initialValue is called in other screens.
//e.g. CreateScreen
//React will automatically check if we have this. If we do, then it will automatically use this.

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

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

export default BlogPostForm;