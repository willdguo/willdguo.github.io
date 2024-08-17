// import axios from "axios"

// const baseUrl = "http://localhost:3001/puzzle_list"

// const getPuzzles = async () => {
//     const response = await axios.get(baseUrl)
//     return response.data
// }

// const addPuzzle = async (obj) => {
//     const response = await axios.post(baseUrl, obj)
//     return response.data
// }
// // eslint-disable-next-line
// export default {
//     getPuzzles,
//     addPuzzle
// }

import puzzles from "../db.json"

const getPuzzles = () => {
    console.log(puzzles['puzzle_list'])
    return puzzles['puzzle_list']
}

const addPuzzle = () => {
    return puzzles['puzzle_list']
}

// eslint-disable-next-line
export default {
    getPuzzles,
    addPuzzle,
}