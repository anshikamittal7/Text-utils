import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter the text here');
    const uppercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    };
    const lowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    };
    const textHandle = (event) => {
        setText(event.target.value)
    }
    const reset = () => {
        setText('Enter the text here');
    }
    const deleteText = () => {
        setText("");
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        alert("text copied");
    }
    return (
        <>
            <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h1>Text Analyser </h1>
                <textarea rows={8} className={`form-control text-${props.mode === 'dark' ? 'light' : 'dark'}`} value={text} onChange={textHandle} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}></textarea>
                <div className='text-center'>
                    <button className='btn btn-primary m-2' onClick={uppercase}>to UpperCase</button>
                    <button className='btn btn-primary m-2' onClick={lowercase}>to LowerCase</button>
                    <button className='btn btn-info m-2' onClick={copyText}>copy to clipboard</button>
                    <button className='btn btn-secondary m-2' onClick={reset}>reset</button>
                    <button className='btn btn-danger m-2' onClick={deleteText}>clear text</button>
                </div>
            </div>
            <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <h3>Text summary</h3>
                <p>The text contains {text.split(" ").length} <b>words</b> and {text.length} <b>letters</b>.</p>
                <h3>Preview</h3>
                <p>{text.length === 0 ? "Write something in the above box to preview" : text}</p>
            </div>
        </>
    )
}
