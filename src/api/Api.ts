import axios from "axios";
import {ProfileType, ProfileUsersType, UpdateStatusUserType} from "../redux/profile-reducer";

const Instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4dc5ae3c-52f6-4e4c-9a8e-47e368841d1f'
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
    updateLogin(){
        return Instance.post('login/', {})
    }
}