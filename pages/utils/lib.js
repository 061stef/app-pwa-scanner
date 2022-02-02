export const BASE_URL = 'https://stage-api.fisascat-cloud.it';
export const CDN_BASE_PATH = 'https://cdn.fisascat-cloud.it'

export async function call(method = 'GET', data = null, url, headers){
    try{
        const option = {
            method: method,
            headers: headers,
            data: data
        }
        const response = await fetch(`${BASE_URL}/${url}`, option);
        const json = await response.json()
        return { result: json, status: response.status }
    } catch (err){
        console.error(err);
        return {error: err}
    }
}