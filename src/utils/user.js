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
export function changePassword(id, params) {
    return axios.put(`/User/Change/Password/${id}`, params);
}
export function deleteUser(id) {
    return axios.delete(`/User/delete/${id}`);
}
export function searchByChefName(
    params = {
        name: String
    }
) {
    return axios.get("/Chef/List", { params });
}
export function getChefListWithPagination(
    params = {
        PageSize: Number,
        PageNumberPerPage: Number,
    }
) {
    return axios.get("/Chef/List", { params });
}
export function getAllChefList() {
    return axios.get("/Chef/List");
}
export function getUserRecipeDetail(id, params = {
    PageSize: Number,
    PageNumberPerPage: Number,
}) {
    return axios.get(`/User/Recipe/Detail/${id}`, { params });
}
