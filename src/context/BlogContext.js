import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

//For get_blogpost, we only use action.payload because if we are calling the API, this is seen as the source of truth
// Therefore, there is no need for the ...state, because everything in the server is the most updated state

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts' :
            return action.payload;
        case 'edit_blogpost' :
            return state.map((blogPost) => {
                return  blogPost.id === action.payload.id
                ? action.payload
                : blogPost; 
            });
        case 'delete_blogpost' :
            return state.filter(blogPost => blogPost.id !== action.payload);
        default :
            return state;
    }
};

//The callback function is called just in case we don't use callback later on.
//In case we do, then the callback function can be called

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');

        dispatch ({type: 'get_blogposts', payload: response.data});
    };
};

const addBlogPost = dispatch => {
    return async (title, content, callback) => {

        await jsonServer.post('/blogposts', {title, content});
        
        //The long version of the second arguments are title: title, content: content
        if (callback) {
            callback();
        }
    };
};

const deleteBlogPost = dispatch => {
    return async id => {

        await jsonServer.delete(`/blogposts/${id}`);

        dispatch ({type: 'delete_blogpost', payload: id});
    };
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {

        await jsonServer.put(`/blogposts/${id}`);

        dispatch({
            type: 'edit_blogpost',
            payload: {id, title, content}
        });
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    []
);