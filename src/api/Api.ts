import axios from "axios";


const Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7b707044-71d7-4278-8d6b-08f541ab464d'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return Instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },


}

export const followAPI = {
    getFollowUsers(id: number) {
        return Instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
}

export const unFollowAPI = {
    getUnFollowUsers(id: number) {
        return Instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}