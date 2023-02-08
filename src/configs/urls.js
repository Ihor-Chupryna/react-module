const baseURL = 'http://owu.linkpc.net/carsAPI/v1';

const urls = {
    cars: '/cars',
    carById: (id) => `/cars/${id}`
}

export { baseURL, urls }
