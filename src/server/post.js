import axios from 'axios'

export function HttpPost(url, data, token = '', headerVersion) {
    var result = axios({
        method: "POST",
        headers: {
            "pragma": "no-cache",
            'Content-type': 'application/json;charset=UTF-8' ,
            'Accept':headerVersion!==undefined ? `application/vnd.${headerVersion}.api.v1+json;charset=UTF-8` : 'application/json, text/plain, */*' ,
            'Authorization': token
        },
        url: url,
        data: data
    })
    return result
}
