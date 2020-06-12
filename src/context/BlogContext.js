import React, {useReducer} from 'react';

const BlogContext = React.createContext();

const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost' : 
            return [...state, {title: `Blog post #${state.length + 1}`}];
        default :
            return state;
    }
};

export const BlogProvider = ({children}) => {

    const [blogPosts, dispatch] = useReducer(BlogReducer, []);

    const addBlogPost = () => {
        dispatch ({type: 'add_blogpost'});
    };


    return (
        <BlogContext.Provider value = {{data: blogPosts, addBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;

//Note that you can't render an object text within <Text> in React. So render this within a flatlist object.