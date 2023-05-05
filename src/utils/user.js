import { axios } from "./axios";

export function getUserList() {
    return axios.get("/User/List");
}
export function getUserDetail(id) {
    return axios.get(`/User/Detail/${id}`);
}
export function register(user) {
    return axios.post(`/Register`, user);
}
export function login(user) {
    return axios.post(`/Login`, user);
}
export function logout(token) {
    return axios.post(`/User/Logout`, token);
}
export function editUser(id, user) {
    return axios.put(`/User/Edit/${id}`, user);
}
export function changePassword(id, password) {
    return axios.put(`/User/Change/Password/${id}`, password);
}
export function deleteUser(id) {
    return axios.delete(`/User/delete/${id}`);
}
