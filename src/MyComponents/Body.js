import React, { useState } from 'react'

export default function Body(props) {

    const [text, settext] = useState("Enter your text here")

    function funUpperCase(){
        settext(text.toUpperCase());
    }
    function funLowerCase(){
        settext(text.toLowerCase());
    }
    function funClearText(){
        settext('');
    }
    function Changes(event){
        settext(event.target.value);
    }

  return (
    <div className="container" style={{color: `${props.mode == "light"?"black":"white"}`}}>
        <h1 className="my-4">Text Utils</h1>
        <p>Enter your text in the textarea below to analyse it</p>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={Changes} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button type="button" className={`btn btn-${props.mode == "light"?"dark":"light"} mx-2`} onClick={()=>funUpperCase()}>UpperCase</button>
        <button type="button" className={`btn btn-${props.mode == "light"?"dark":"light"} mx-2`} onClick={()=>funLowerCase()}>LowerCase</button>
        <button type="button" className={`btn btn-${props.mode == "light"?"dark":"light"} mx-2`} onClick={()=>funClearText()}>ClearText</button>
    </div>
  )
}
