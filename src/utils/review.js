import { axios } from "./axios";

export function getReviewList() {
    return axios.get("/Review/List");
}
export function getRecipeReviews(id) {
    return axios.get(`/Recipe/Review/Details/${id}`);
}
export function getRecipeReviewsWithPagination(id, params = {
    PageSize: Number,
    PageNumberPerPage: Number,
}) {
    return axios.get(`/Recipe/Review/Details/${id}`, { params });
}
export function getUserReviews(id, params = {
    PageSize: Number,
    PageNumberPerPage: Number,
}) {
    return axios.get(`/User/Review/Details/${id}`, { params });
}
export function addReview(review) {
    return axios.post(`/Review/Add`, review);
}
export function editReview(id, data) {
    return axios.put(`/Review/Edit/${id}`, data);
}
export function deleteReview(id) {
    return axios.delete(`/Review/delete/${id}`);
}
