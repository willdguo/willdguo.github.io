import { useState, useEffect } from "react"
import { Table, Badge, Alert, Button, Form, InputGroup, ButtonGroup, ToggleButton, Accordion } from "react-bootstrap"
import PuzzleService from "../services/puzzles"

const Puzzles = () => {

    /* puzzleSchema = new Puzzle({
        title: String,
        puzzle_category: String in [situation, game, probability, etc.]
        puzzle_difficulty: String in [easy, medium, hard],
        puzzle_statement: String,
        puzzle_hint: String,
        puzzle_answer: String,
        id: int,
    })
    */

    const [puzzle_list, setPuzzle_list] = useState([])
    const [puzzle_list_filtered, setPuzzle_list_filtered] = useState([])
    // const [expanded, setExpanded] = useState(false)

    const [search, setSearch] = useState('')
    const [catFilter, setCatFilter] = useState('') // useState(["Brain Teaser", "Lateral Puzzles", "Probability", "Coding"])
    const [difFilter, setDifFilter] = useState('') //useState(["easy", "medium", "hard"])

    const [puzzleCats, setPuzzleCats] = useState([])
    // want to filter by a) difficulty, b) category

    useEffect(() => {
        // PuzzleService.getPuzzles()
        // .then(response => {
        //     setPuzzle_list(response)

        //     // get unique puzzle types
        //     let temp = []
            
        //     response.forEach(puzzle => {
        //         if(!temp.includes(puzzle.puzzle_category)){
        //             // console.log("new one")
        //             temp = temp.concat(puzzle.puzzle_category)
        //         }
        //     })

        //     setPuzzleCats(temp)
        // })
        const temp = PuzzleService.getPuzzles()
        setPuzzle_list(temp)
        let cats = []
        temp.forEach(puzzle => {
            if(!cats.includes(puzzle.puzzle_category)) {
                cats = cats.concat(puzzle.puzzle_category)
            }
        })
        setPuzzleCats(cats)
    }, [])

    // filter for search
    useEffect(() => {
        let temp = puzzle_list.filter(puzzle => puzzle.title.includes(search) || puzzle.puzzle_statement.includes(search))

        if(difFilter !== ''){
            temp = temp.filter(puzzle => puzzle.puzzle_difficulty === difFilter)
        }

        if(catFilter !== ''){
            temp = temp.filter(puzzle => puzzle.puzzle_category === catFilter)
        }

        setPuzzle_list_filtered(temp)
    }, [puzzle_list, search, difFilter, catFilter])

    const handleDifFilter = (newDif) => {
        
        if(difFilter === newDif){
            setDifFilter('')
            return
        }
        setDifFilter(newDif)
    }

    const handleCatFilter = (newCat) => {
        if(catFilter === newCat){
            setCatFilter('')
            return
        }

        setCatFilter(newCat)
    }

    return (
        <div>
            <h1> Puzzles </h1>


            <InputGroup>
                <Form.Control
                    placeholder = "Search"
                    value = {search}
                    onChange = {(e) => setSearch(e.target.value)}
                />
            </InputGroup>

            <ButtonGroup>
                {['easy','medium','hard'].map((dif, i) => (
                    <ToggleButton
                        key = {i}
                        type = "checkbox"
                        variant = {["outline-success", "outline-warning", "outline-danger"][i]}
                        checked = {difFilter === dif}
                        // value = "easy"
                        onClick = {() => handleDifFilter(dif)}
                    >
                        {dif}
                    </ToggleButton>
                ))}
                
            </ButtonGroup>


            <ButtonGroup>
                {puzzleCats.map((cat, i) => (
                    <ToggleButton
                        key = {i}
                        type = "radio"
                        variant = "dark"
                        checked = {catFilter === cat}
                        // value = ""
                        onClick = {() => handleCatFilter(cat)}
                    >
                        {cat}
                    </ToggleButton>
                ))}
            </ButtonGroup>

            <Table 
                    striped 
                    bordered 
                    >
                    <thead>
                    <tr>
                        <th> </th>
                        <th> Puzzle </th>
                        <th> Category </th>
                        <th> Problem </th>
                    </tr>
                    </thead>
                    <tbody>
                    {puzzle_list_filtered.map((puzzle, index) => 
                        <tr key = {puzzle.id}>
                            <td> {index + 1} </td>
                            <td> 
                                {puzzle.title}
                            </td>
                            <td>
                                {puzzle.puzzle_category}
                                <Badge bg = {`${puzzle.puzzle_difficulty === 'easy' ? 'success' : puzzle.puzzle_difficulty === 'medium' ? 'warning' : 'danger' }`}> 
                                {puzzle.puzzle_difficulty} 
                                </Badge>
                            </td>
                            <td>
                                {puzzle.puzzle_statement}

                                <Accordion>
                                    <Accordion.Item eventKey = {index} style = {{backgroundColor: "transparent"}}>
                                        <Accordion.Header> Answer </Accordion.Header>
                                        <Accordion.Body>
                                            {puzzle.puzzle_answer}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>

                {/* <Button onClick = {() => setExpanded(!expanded)} variant = "secondary">
                    {expanded ? 'Collapse Table' : 'Expand Table'}
                </Button> */}

            {/* <AddPuzzle puzzle_list = {puzzle_list} setPuzzle_list={setPuzzle_list} /> */}
        </div>
    )
}
// eslint-disable-next-line
const AddPuzzle = ( {puzzle_list, setPuzzle_list} ) => {
    /* puzzleSchema = new Puzzle({
    title: String,
    puzzle_category: String in [situation, game, probability, etc.]
    puzzle_difficulty: String in [easy, medium, hard],
    puzzle_statement: String,
    puzzle_hints: [
      type: String,
    ]
    puzzle_answer: String,
    id: int,
  })
  */
    const [title, setTitle] = useState('')
    const [puzzle_category, setPuzzle_category] = useState('')
    const [puzzle_difficulty, setPuzzle_difficulty] = useState('')
    const [puzzle_statement, setPuzzle_statement] = useState('')
    const [puzzle_hint, setPuzzle_hint] = useState('')
    const [puzzle_answer, setPuzzle_answer] = useState('')

    const [notif, setNotif] = useState('')
    const [error, setError] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()

        if (!title || !title.trim() || !puzzle_statement || !puzzle_statement.trim()){
            setError('Error: puzzle invalid.')

            setTimeout(() => {
                setError('')
            }, 3000)
            return
        }

        const newId = Math.max(...puzzle_list.map(puzzle => puzzle.id)) + 1

        const newPuzzle = {
            title: title,
            puzzle_category: puzzle_category,
            puzzle_difficulty: puzzle_difficulty,
            puzzle_statement: puzzle_statement,
            puzzle_hint: puzzle_hint,
            puzzle_answer: puzzle_answer,
            id: newId
        }
        
        const newPuzzle_list = puzzle_list.concat(newPuzzle)
        setPuzzle_list(newPuzzle_list)
        console.log("Success!")
        console.log(newPuzzle_list)
        await PuzzleService.addPuzzle(newPuzzle)

        setTitle('')
        setPuzzle_category('')
        setPuzzle_difficulty('')
        setPuzzle_statement('')
        setPuzzle_hint('')
        setPuzzle_answer('')

        setNotif('New puzzle added!')
        setTimeout(() => {
            setNotif('')
        }, 5000)
    }

    return (
        <div>
            <h1> Add Puzzle </h1>
            {notif === ''
            ? null
            : 
                <Alert variant = 'success'>
                    {notif}
                </Alert>
            }

            {error === ''
            ? null
            :
                <Alert variant = 'danger'>
                    {error} 
                </Alert>
            }
            <Form onSubmit = {onSubmit}>
                <Form.Group>
                    <Form.Label> Title </Form.Label>
                    <Form.Control type = "text" value = {title} onChange = {(e) => setTitle(e.target.value)}/>

                    <Form.Label> Category </Form.Label>
                    <Form.Control type = "text" value = {puzzle_category} onChange = {(e) => setPuzzle_category(e.target.value)}/>

                    <Form.Label> Difficulty </Form.Label>
                    <Form.Control type = "text" value = {puzzle_difficulty} onChange = {(e) => setPuzzle_difficulty(e.target.value)}/>

                    <Form.Label> Problem Statement </Form.Label>
                    <Form.Control as = "textarea" rows = {3} value = {puzzle_statement} onChange = {(e) => setPuzzle_statement(e.target.value)}/>

                    <Form.Label> Hint </Form.Label>
                    <Form.Control type = "text" value = {puzzle_hint} onChange = {(e) => setPuzzle_hint(e.target.value)}/>

                    <Form.Label> Answer </Form.Label>
                    <Form.Control as = "textarea" rows = {3} value = {puzzle_answer} onChange = {(e) => setPuzzle_answer(e.target.value)}/>
                </Form.Group>
                <Button variant = "dark" type = "submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Puzzles