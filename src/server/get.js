import axios from 'axios'

export function HttpGet(url, token = '') {
    var result = axios({
        method: "GET",
        headers: {
            "pragma": "no-cache",
            'Content-type': 'application/json;charset=UTF-8',
            'Authorization': token
        },
        url: url,
        withCredentials: true
    })
    return result
}
