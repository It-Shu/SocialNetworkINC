import axios from "axios";
import {ProfileUsersType, UpdateStatusUserType} from "../redux/profile-reducer";

const Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c0f2dd78-f917-41b6-956e-59f68d94bfda'
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

export const headerAPI = {
    getAuthMe() {
        return Instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return Instance.get<ProfileUsersType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return Instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return Instance.put<UpdateStatusUserType>(`profile/status`, {status})
           // .then(response => response.data)
    }
}

export const loginAPI = {
    updateLogin(email: string, password: string, rememberMe: boolean){
        return Instance.post('auth/login', {email, password, rememberMe})
    },
    Logout(){
        return Instance.delete('auth/login' )
    }
}
