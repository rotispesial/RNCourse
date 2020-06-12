import React, {useState} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {

    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        //This refreshes the state every time blog post is invoked. 
        //The '...' means to restore everything in that blogPost from the previous state
        //The next argument is the actual item to be added, in this case adding the blog post title to be dynamic
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}`}]);
    };

    return (
        <BlogContext.Provider value = {{data: blogPosts, addBlogPost: addBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;

//Note that you can't render an object text within <Text> in React.