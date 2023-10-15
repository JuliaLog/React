import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '079a8e59-f7cf-448c-9cb4-0cdd0811493a'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
          .get(
              "users?page=${currentPage}&count=${pageSize}")
          .then((response) => {
            return response.data;
          });
      },
    follow(usersId) {
        return instance.post('follow/${usersId}')
      },
    unfollow(usersId) {
        return instance.delete('follow/${usersId}')
      },
    getProfile(userId) {
        console.warn('Obsolete method.Please profileAPI object')
        return profileAPI.getProfile(userId);
      }

};

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId);
      },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', { status });
    }
};


export const authAPI = {
    me () {
        return instance.get('auth/me');
    },
    login (email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe });
    },
    logout () {
        return instance.delete('auth/login');
    },
}