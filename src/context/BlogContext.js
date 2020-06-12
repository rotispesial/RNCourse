import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost' : 
            return [...state, {title: `Blog post #${state.length + 1}`}];
        default :
            return state;
    }
};

const addBlogPost = () => {
    dispatch ({type: 'add_blogpost'});
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost},
    []
);

//Note that you can't render an object text within <Text> in React. So render this within a flatlist object.