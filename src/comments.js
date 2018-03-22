import * as constants from './constants.js';

function comments(state = [], action) {
	switch (action.type) {
		case constants.ADD_COMMENT:
			return [
				{
					id: action.payload.id,
					text: action.payload.text,
					votes: 0,
				},
				state.comments,
			];
		case constants.REMOVE_COMMENT:
			return state.comments.filter(
				comment => comment.id !== action.payload.id
			);
		case constants.EDIT_COMMENT:
			return state.comments.map(
				comment =>
					comment.id === action.payload.id
						? { id: action.payload.id, text: action.payload.text }
						: comment
			);
		case constants.THUMB_UP_COMMENT:
			return state.comments.map(
				comment =>
					comment.id === action.payload.id
						? { id: action.payload.id, votes: comment.votes + 1 }
						: comment
			);
		case constants.THUMB_DOWN_COMMENT:
			return state.comments.map(
				comment =>
					comment.id === action.payload.id
						? { id: action.payload.id, votes: comment.votes - 1 }
						: comment
			);
		default:
			return state;
	}
}

export default comments;
