import axios from "axios";

const Base_url = "https://jsonplaceholder.typicode.com/users";
const cache = new Map();
let Controller = null;

export async function getUserData(userId) {
    try {
        let id = String(userId)
        if (cache.has(id)) {
            const dataFromCache = cache.get(id);
            console.log(dataFromCache, "dataFromCache");
            return dataFromCache
        }
        if (Controller) Controller.abort();
        Controller = new AbortController();
        const signal = Controller.signal;
        const url = `${Base_url}/${userId}`;
        const { data } = await axios.get(url, { signal });
        cache.set(id, data);
        return data
    } catch (error) {
        console.error("Error fetching UserData by Id:", error);
        throw error;
    }

}