import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "335274bf-cf3e-4992-b15d-177ac23ff91e"},
   
}) 

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {return response.data})
    },
    updateUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => {return response.data})
        
    },
    unfollow(id = 2) {
        return  instance.delete(`follow/${id}` ).then(response => {return response.data})
    },
    follow(id=2) {
        return instance.post(`follow/${id}`).then(response => {return response.data})
    }
}

export const headerApi = {
    auth () {
    return instance.get(`auth/me`).then(response => {return response.data})
    }
}
