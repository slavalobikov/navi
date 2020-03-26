import * as axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"be820c73-af0b-4ffa-9553-5bd0d04425d6"
    }


});


export const userAPI = {
    getFriends(pageNumber, pageSize) {
        return  instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data /* ПРОМИСЫ */
            })
    },
    deleteFriend(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data.resultCode
            })
    },
    postFriend(id) {
        return instance.post(`follow/${id}`)
            .then (response => {
                return response.data.resultCode
            })
    },
    getAuth(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getProfile(id){
        return instance.get(`profile/` + id)
            .then(response => {
                return response.data.photos.small
            })
    },
};


