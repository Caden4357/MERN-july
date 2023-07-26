import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Form = (props) => {
    const navigate = useNavigate()
    const [color, setColor] = useState('')
    const [word, setWord] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/dynamic/${word}/${color}`)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Type in a color</label>
                    <input type="text" onChange={(e) => setColor(e.target.value)} />
                </div>
                <div>
                    <label>Type a word: </label>
                    <input type="text" onChange={(e) => setWord(e.target.value)} />
                </div>
                <button>submit</button>
            </form>
        </div>
    )
}

export default Form;