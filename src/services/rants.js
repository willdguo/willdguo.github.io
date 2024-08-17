import axios from "axios"

const baseUrl = "http://localhost:3001/rant_list"

const getRants = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const addRant = async (obj) => {
    const response = await axios.post(baseUrl, obj)
    return response.data
}
// eslint-disable-next-line
export default {
    getRants,
    addRant
}