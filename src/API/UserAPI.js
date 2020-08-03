import Axios from "axios";

const userLogIn = (user) => Axios.post("https://reqres.in/api/login", {
    email: user.User_Email, password: user.User_Password
})
// const getUserList = () => Axios.get("https://reqres.in/api/users")

const getUserListByPage = (page) => Axios.get(`https://reqres.in/api/users?page=${page}`)

const getUserDetailsbyID = (id) => Axios.get(`https://reqres.in/api/users/${id}`)

export default { userLogIn, getUserListByPage, getUserDetailsbyID }
