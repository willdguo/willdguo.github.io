import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import rantsService from '../services/rants'

const Rants = () => {

    const [rant_list, setRant_list] = useState([])

    useEffect(() => {
        rantsService.getRants()
            .then(response => {
                setRant_list(response)
            })
    }, [])

    return (
        <div>
            <h1> Rants </h1>

            {rant_list.map(rant => 
                <div key = {rant.title}>
                    <h3> {rant.title} </h3>
                    <p> {rant.date.toString()} </p>
                    
                    <p style = {{whiteSpace: "pre-line"}}> {rant.content} </p> {/* why tf don't the rants split up in lines */}
                </div>
            )}

            <AddRant rant_list = {rant_list} setRant_list = {setRant_list} />

        </div>
    )
}

const AddRant = ({ rant_list, setRant_list }) => {

    /*
    rant schema:
    const Rant = new Schema({
        title: String,
        content: String,
        rant_date: Date,
        id: int,
    })
    */

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if(!title.trim() || !content.trim()){
            console.log('invalid rant - try again')
            return
        }

        const newId = Math.max(...rant_list.map(rant => rant.id)) + 1

        const newRant = {
            title: title,
            content: content,
            date: new Date(),
            id: newId,
        }

        setRant_list(rant_list.concat(newRant))
        await rantsService.addRant(newRant)
        console.log("success!")
        console.log(newRant)
    }

    return (
        <div>
            <h1> Add Rant </h1>

            <Form onSubmit = {onSubmit}>
                <Form.Group>
                    <Form.Label> Title </Form.Label>
                    <Form.Control type = "text" value = {title} onChange = {e => setTitle(e.target.value)}/>

                    <Form.Label> Content </Form.Label>
                    <Form.Control as = "textarea" rows = "5" value = {content} onChange = {e => setContent(e.target.value)}/>
                </Form.Group>
                <Button variant = "dark" type = "submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Rants

