import axios from "axios";

async function post(url, data, header = null) {
    try {
        var result = await axios.post(url, data, {
            headers: header,
            timeout: 30000
        });

        localStorage.setItem('access_token', result.data.data.accessToken);
    } catch (error) {
        console.log(error);
    }
    
}

async function get(url, data, header = null) {
    var request = axios.create({ headers: header, data: data });

    await request
        .post(url)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
}

export default{
    post,
    get,
};
