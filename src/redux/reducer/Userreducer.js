export const UserReducer = (state = {}, { type, payload }) => {
    switch (type) {

        case "LOGIN_USER_REQUEST": return { ...state, loading: true }
        case "LOGIN_USER_SUCCESS": return { ...state, loading: false, userlogin: payload, login: true }
        case "LOGIN_USER_FAIL": return { ...state, loading: false, error: payload }

        case "USER_LOGOUT" : return { logout: true }
        default: return state;
    }
}