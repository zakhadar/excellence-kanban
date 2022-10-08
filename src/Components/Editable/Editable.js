import React, { useState } from 'react'
import './Editable.css'
import { X } from 'react-feather'

const Editable = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className='editable'>
      {
        showEdit ? (
        <form 
        className={`editable_edit ${props.editClass || ""}`}
        onSubmit={(event) => {
          event.preventDefault();
          if(props.onSubmit) props.onSubmit();
        }}>
          <input type="text" placeholder={props.placeholder || "Add Card Title"} />
          <div className='editable_edit_footer'>
            <button type='submit'>{props.buttonText || "Add"}</button>
            <X onClick={()=> setShowEdit(false)} className="closeIcon"/>
          </div>
        </form>
        ) : (
          <p className={`editable_display ${
          props.displayClass ? props.displayClass : ""
          }`}
          onClick={()=>setShowEdit(true)}>{props.text || "Add Card"}</p>
        )
        
      }
      
    </div>
  )
}

export default Editable