

const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors 
});

export const login = (user) => {

} 

