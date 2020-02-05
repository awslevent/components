import axious from 'axios'


export default axious.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d063a61b0eeb51270504189575dcf743458172b16a8f37d6658dc14e733d6fa8'
    }
})