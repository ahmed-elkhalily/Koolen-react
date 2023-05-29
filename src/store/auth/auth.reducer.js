import AUTH from './auth.types';

const { LOGIN, LOGOUT, EDIT_PROFILE } = AUTH;

const initState = {
    name: '',
    phone: '',
    email: '',
};

export default function userReducer(state = initState, action) {
    switch (action.type) {
    case LOGIN:
        return {
            ...action.payload,
        };

    case LOGOUT:
        return initState;

    case EDIT_PROFILE:
        return {
            ...state,
            ...action.payload,
        };
    default:
        return state;
    }
}
