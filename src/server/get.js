import axios from 'axios'

export function HttpGet(url,data) {
    var result = axios({
        method: "GET",
        headers: {
            "pragma": "no-cache",
            'Content-type': 'application/json;charset=UTF-8',
        },
        url: url,
        withCredentials: true,
        params:data,
    })
    return result
}
