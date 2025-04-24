import axios from "axios";

const Base_url = "https://jsonplaceholder.typicode.com/users";
const cache = new Map();
let controller = null;

export async function getUserData(userId) {
    if (cache.has(userId)) {
        console.log("cache is not empty");
    }
    try {
        const url = `${Base_url}/${userId}`;
        const { data } = await axios.get(url);
        console.log(data, "this is fetch data from mock API");
        return data
    } catch (error) {
        console.error("Error fetching UserData by Id:", error);
        throw error;
    }

}