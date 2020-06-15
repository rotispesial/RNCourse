import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {

    const { state } = useContext(Context);

    //locate the ID to find which screen to edit
    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return <BlogPostForm />

};

const styles = StyleSheet.create({});

export default EditScreen;