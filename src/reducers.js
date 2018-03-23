import comments from './comments.js';
import users from './users.js';
import { combineReducers } from 'redux';

const initialState = {
    comments: [],
    users: [],
};

//#1

function app(state = initialState, action) {
    return {
        comments: comments.comments(state.comments, action),
        users: users.users(state.users, action),
    };
}

//#2

const app = combineReducers({
    comments,
    users,
});

export default app;

/*function commentsReducer(state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.payload.id,
                        text: action.payload.text
                    }, ...state.comments]
                });
        case constants.REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter( comment => comment.id !== action.payload.id )
            });
        case constants.EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map( comment => comment.id === action.payload.id ? {id: comment.id, text: action.payload.text} : comment )
            });
        case constants.THUMP_UP_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map( comment => comment.id === action.payload.id ? { id: comment.id, votes: comment.votes + 1 } : comment )
            })
        case constants.THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map( comment => comment.id === action.payload.id ? { id: comment.id, votes: comment.votes - 1 } : comment )
            })
        default:
            return state;
    }
};*/
