import axios from "axios"
export const UserLogin = ({ email, password }) => async dispatch => {
    try {
        dispatch({ type: "LOGIN_USER_REQUEST" })
        const {data} = await axios.get("http://localhost:3004/users")
        const result = data.find(item => item.email === email && item.password === password)
        console.warn(result);
        if (!result) {
            dispatch({ type: "LOGIN_USER_FAIL", payload: "please check email or password" })
        } else {
            dispatch({ type: "LOGIN_USER_SUCCESS", payload: result })
        }
    } catch (error) {
        dispatch({ type: "LOGIN_USER_FAIL", payload: error })   

    }
}
export const logoutUser = () => dispatch => {
    dispatch({ type: "USER_LOGOUT" })
}