import React, {useState} from 'react';






export default function TextForm(props) {

  

    const handleUpClick = () =>{
       

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted To UpperCase!', "success")
    }
    const handleLowClick = () =>{
      

      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted To LowerCase!'  , "success")
  }
  const handleClearClick = () =>{
    

    props.showAlert('Text has been cleared'  , "success")
    setText("")
}

    const handleCopy =()=>{

     
      props.showAlert('Text has been copied'  , "success")
      navigator.clipboard.writeText(text);
      
    

    }
  
    const handleExtraSpaces= ()=>{
      let newText = text.split(/[ ]+/);
      setText (newText.join(' '));
      props.showAlert('Extra spaces has been removed'  , "success")
    }
  


    const handleOnChange = (event) =>{
       setText(event.target.value);
       
  }
  

    const [text, setText] =useState('');

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3" >
            <textarea 
            className="form-control"
            value={text} 
            id="myBox"
            rows="10"
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark'? 'rgb(52 61 64)': 'white', color:props.mode==='dark'? 'white': 'black'}}
            showalert
            
            >

            </textarea>
        </div>
        <button disabled={text.length ===0} className="  btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length ===0}  className=" btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length ===0} className=" btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length ===0} className=" btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length ===0} className=" btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}} >
      <h1>Your text summary- </h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length } minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to preview'}</p>
    </div>
    </>
  )
}
