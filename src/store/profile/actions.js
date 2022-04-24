export const TOGGLE_NAME = 'TOGGLE_NAME';
export const UPDATE_NAME = 'UPDATE_NAME';


export const changeVisible = {
    type: TOGGLE_NAME
};

export const updateName = (name) => ({
    type: UPDATE_NAME,
    playload: name
});