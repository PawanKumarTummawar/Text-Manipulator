import React, { useState } from 'react'
import './TextManipulator.css'

const TextManipulator = () => {
    const [text, setText] = useState("");

    function handleOnChange(event) {
        setText(event.target.value);
        console.log(event.target.value);
    }

  return (
    <div className='container'>
        {/* Parent container which holds both the left and right sections*/ }
        <div className='box'>
            {/* Left Section */}
            <div className='left-section'>
                <h3>User Input</h3>
                <textarea 
                name="user-input"
                rows="20"
                value={text}
                placeholder='Enter your text here...'
                onChange={handleOnChange}
                >
                </textarea>
                <p>Character Count: {text.length}</p>
                <p>Word Count: {text.split(" ").length}</p>
                <p>Reading Time: {60/200*(text.split(" ").length)} seconds</p>
                <div className='button-container'>
                    <button onClick={() => setText(text.toUpperCase())}>Upper-case</button>
                    <button onClick={() => setText(text.toLowerCase())}>Lower-case</button>
                </div>
            </div>

            <div className='right-section'>
                <h3>Print Preview</h3>
                <div className='print-preview'>
                    {text ? text : 'Nothing to Display'}
                </div>
            </div>
        </div>
    </div>
  );
};

export default TextManipulator