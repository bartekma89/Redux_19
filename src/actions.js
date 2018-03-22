import uuid from 'uuid';
import * as constants from './constants.js';

export const addComment = text => {
	return {
		type: constants.ADD_COMMENT,
		payload: {
			text,
			id: uuid.v4(),
		},
	};
};

export const editComment = (text, id) => {
	return {
		type: constants.EDIT_COMMENT,
		payload: {
			text,
			id: id,
		},
	};
};

export const removeComment = id => {
	return {
		type: constants.REMOVE_COMMENT,
		payload: {
			id: id,
		},
	};
};

export const thumbUpComment = id => {
	return {
		type: constants.THUMB_UP_COMMENT,
		payload: {
			id: id,
		},
	};
};

export const thumbDownComment = id => {
	return {
		type: constants.THUMB_DOWN_COMMENT,
		payload: {
			id: id,
		},
	};
};
