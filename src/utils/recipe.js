import { axios } from "./axios"

export function getRecipeListWithPagination(
    params = {
        PageSize: Number,
        PageNumberPerPage: Number
    }
) {
    return axios.get('/Recipe/List', { params })
}
export function searchRecipeList(
    params = {
        RecipeName: String,
        PageSize: Number,
        PageNumberPerPage: Number
    }
) {
    return axios.get('/Recipe/List', { params })
}
export function getMostPopularRecipeListWithPagination(
    params = {
        PageSize: Number,
        PageNumberPerPage: Number
    }
) {
    return axios.get('/Recipe/Most/Rating', { params })
}
export function getRecipeList() {
    return axios.get('/Recipe/List')
}
export function getRecipeDetail(id) {
    return axios.get(`/Recipe/Details/${id}`)
}
export function getRecipeAvgRate(params = {
    ids: Array
}) {
    return axios.get(`/Recipe/Avarage/Rate`, { params })
}
export function recommendationRecipe(ingredients) {
    return axios.post(`/Recipe/Recommendation`, { ingredients: ingredients })
}
export function addRecipe(data) {
    return axios.post(`/Recipe/Add`, data)
}
export function editRecipe(id, data) {
    return axios.put(`/Recipe/Edit/${id}`, data)
}
export function deleteRecipe(id) {
    return axios.delete(`/Recipe/delete/${id}`)
}