const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const urls = {
    auth : {
        login: '/auth',
        refresh: '/auth/refresh',
        me: '/auth/me',
    },
    cars: '/cars',
    carById: (id) => `/cars/${id}`,
    users: '/users'
}

export { baseURL, urls }
