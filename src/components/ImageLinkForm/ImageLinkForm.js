import React from 'react';
import './ImageLinkForm.css'

function ImageLinkForm( {onInput , onUpload, onButtonSubmit}) {
  return (
  	<div >
       <p className='f4'>
         {'This Magic Brain will recognise faces in your images.Give it a try!!'}
       </p>	
       <div className='center'>
	       <div className='form center pa2 br3 shadow-5'>
	       	  <input className='w-50 pa2 f5 center bg-light-gray' placeholder='enter image url' type='url' onChange={onInput}/>
            <div className='white w-10 pa2 f5 center' > or </div>
            <input className='w-50 pa2 f5 center bg-light-gray' type='file' onChange={onUpload}/>
	       	  
	       </div>

       </div>
       <button className='center grow link f5 pa2 white bg-light-purple' onClick={onButtonSubmit}>Detect</button> 
    </div>
  )
}

export default ImageLinkForm;
