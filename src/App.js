import './App.css'
// import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from "./components/TextForm";
//write imrs
import React, { useState } from 'react'
import Alert from './components/Alert.';

function App () {

  const [ mode, setmode ] = useState( 'light' );
  const [ alert, setAlert ] = useState( 'null' );//alert is a funtioon


  const showAlert = ( message, type ) => {
    setAlert( {
      msg: message,
      type: type
    } )
    // setTimeout( () => {
    //   setAlert = null;
    // }, 1500 );

  }

  //function for color palette
  // const removeBodyClasses = () => {
  //   document.body.classList.remove( 'bg-light' )
  //   document.body.classList.remove( 'bg-dark' )
  //   document.body.classList.remove( 'bg-warning' )
  //   document.body.classList.remove( 'bg-danger' )
  //   document.body.classList.remove( 'bg-success' )
  // }

  // const toggleMode = ( cls ) => {
  const toggleMode = () => {
    // console.log( cls );
    // removeBodyClasses();
    // document.body.classList.add( 'bg-' + cls )

    if ( mode === 'light' ) {
      setmode( 'dark' );
      document.body.style.backgroundColor = '#042743';
      showAlert( "dark mode is enabled", "success" );
    }
    else {
      setmode( 'light' );
      document.body.style.backgroundColor = 'white';
      showAlert( "light mode is enabled", "success" );
    }
  }
  return (
    <>
      <Navbar title="Text Util" mode={mode} aboutText="About Textutils" toggleMode={toggleMode} />
      {/* <Alert Alert="hello this is a alert" /> */}
      <Alert alert={alert} />
      <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
      {/* <About /> */}
    </>
  )
}

export default App
