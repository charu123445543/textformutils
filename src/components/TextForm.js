import React, { useState } from 'react'
//hooks let you use state and other React features without writing a class.

export default function TextForm ( props ) {
    const handleUpClick = () => {
        // console.log( "uppercase was clicked:" + text );
        let newText = text.toUpperCase();
        setText( newText );
        // setText( "you have clicked uppercase button" );
        props.showAlert( "Converted to uppercase", "success" );
    }
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText( newText );
        props.showAlert( "Converted to lowercase", "success" );

    }
    const handleClearClick = () => {

        let newText = "";
        setText( newText );
        props.showAlert( "Content is cleared", "success" );

    }
    // const handleDarkTheme = () => {

    //     let newText=
    //     document.querySelector( '.form-group' ).style.backgroundColor = "black"
    //     document.querySelector( '.form-group' ).style.color = "white"

    // }
    const handleOnChange = ( event ) => {
        // console.log( 'onchange was clicked' );
        setText( event.target.value );
    }
    // Credits: A
    const handleCopy = () => {
        navigator.clipboard.writeText( text );
        document.getSelection.removeAllRanges();//selected text remove hojaega
        props.showAlert( "Copied to Clipboard!", "success" );
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split( /[ ]+/ );
        setText( newText.join( " " ) );
        props.showAlert( "Extra spaces removed!", "success" );
    }
    // Declare a new state variable, which we'll call "textt"
    // const [ text, setText ] = useState( "Enter your text here" );
    const [ text, setText ] = useState( "" );
    return (
        <div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1>{props.heading}</h1>
                <form action="">
                    <div className="form-group">

                        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}
                            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} ></textarea>
                    </div>
                    <button type="button" disabled={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button type="button" disabled={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-secondary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    {/* <button type="button" className="btn btn-secondary mx-2" onClick={handleDarkTheme}>Dark Theme</button> */}
                </form>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>
                    {text.split( /\s+/ ).filter( ( element ) => { return element.length !== 0 } ).length} words and {text.length} characters

                </p>
                <p>{0.008 * text.split( " " ).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to  preview"}</p>

            </div>

        </div>
    )
}
