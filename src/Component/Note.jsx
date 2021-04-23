import React from 'react'
import '../style.css'
import DeleteOutLineRounded from '@material-ui/icons/DeleteOutlineRounded';

const Note = (props) => {
  const deleteNote =()=>{
    props.DeleteItem(props.id)
  };
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button className="del" onClick={deleteNote}>
      <DeleteOutLineRounded className="delete_icon"/>
      </button>
    </div>
  )
}

export default Note
