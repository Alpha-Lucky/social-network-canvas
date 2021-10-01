import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "335274bf-cf3e-4992-b15d-177ac23ff91e" },

})

export const headerApi = {
    auth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    loginOut() {
        return instance.delete(`auth/login`)
    }
}

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data })
    },
    updateUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => { return response.data })

    },
    unfollow(id = 19705) {
        return instance.delete(`follow/${id}`)
    },
    follow(id = 19705) {
        return instance.post(`follow/${id}`)
    },
    getUsersSideBar() {
        return instance.get(`users?count=6`).then(response => { return response.data })
    }
}

export const profileApi = {
    profile(userId = 19705) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId = 19705) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        debugger
        return instance.put(`profile/status`, status)
    },
    savePhoto(files) {
        const formData = new FormData()
        formData.append("image", files)
        return instance.put(`profile/photo`, formData, { 
            'Content-Type': 'multipart/form-data'
         })
    }
}
