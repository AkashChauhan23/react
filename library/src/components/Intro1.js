import React, { useState } from 'react'


function Intro1(props) {

    const [data, setTextData] = useState('');
    // user input data updating automatically 
    const textUpdating = (event) => {
        setTextData(event.target.value)
    }
    // change text to upper case
    const textToUpper = () => {
        if (data.length > 0){
            let textUpper = data.toUpperCase()
            setTextData(textUpper)
        }
    }
    // change text to lower case
    const textToLower = () => {
        if (data.length > 0){
            let textLower = data.toLowerCase()
            setTextData(textLower)
        }
    }
    // copy the text to clip
    const textToCopy = () => {
        navigator.clipboard.writeText(data)
        props.showAlert("Your text is coppied to clipboard!", "success")
    }

    return (
        <>
            <div className="container" style={ {color: props.mode==='dark'?'white':'black'} }>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Write your comments below:
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={8}
                        placeholder="Enter something here..."
                        // defaultValue={""}
                        value={data}
                        onChange={textUpdating}
                    />
                </div>
                <button onClick={textToUpper} className="btn btn-outline-success mx-2"> ToUpper... </button>
                <button onClick={textToLower} className="btn btn-warning mx-2"> ToLower... </button>
                <button onClick={textToCopy} className="btn btn-outline-secondary mx-2"> Copy Text... </button>
            </div>
            <div className="container" style={ {color: props.mode==='dark'?'white':'black'} }>
                <h4>Preview</h4>
                <p>{data}</p>
                <p>{data.length} characters and {data.split(' ').length} words</p>
            </div>
        </>
    );
};

export default Intro1;