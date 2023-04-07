import { axios } from "./axios"

export function getRecipeListWithPagination(
    params = {
        PageSize:Number,
        PageNumberPerPage:Number
    }
){
    return axios.get('/Recipe/List',{params})
}
export function searchRecipeList(
    params = {
        RecipeName:String,
        PageSize:Number,
        PageNumberPerPage:Number
    }
){
    return axios.get('/Recipe/List',{params})
}
export function getRecipeList(){
    return axios.get('/Recipe/List')
}
export function getRecipeDetail(id){
    return axios.get(`/Recipe/Details/${id}`)
}
export function recommendationRecipe(ingredients){
    return axios.post(`/Recipe/Recomendation`,ingredients)
}
export function addRecipe(data){
    return axios.post(`/Recipe/Add`,data)
}
export function editRecipe(id,data){
    return axios.put(`/Recipe/Edit/${id}`,data)
}
export function deleteRecipe(id){
    return axios.delete(`/Recipe/delete/${id}`)
}