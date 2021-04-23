import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const CreateArea = (props) => {
  const [note, SetNote] = useState({
    title: "",
    content: "",
  });
  const InputEvent =(event)=>{
    const value = event.target.value;
    const name = event.target.name;
    SetNote((PreValue)=>{
     return{
        ...PreValue,
        [name]:value,
     }
    });
  }
  const AddClick =()=>{
    props.passNote(note);
    SetNote({
      title: "",
      content: "",
    })
  }
  return (
    <div>
      <form>
        <input type="text" 
        name="title" 
        value={note.title}
        onChange={InputEvent}
        placeholder="Title..." 
        id="" />
        <p>
          <textarea  
          name="content"
          value={note.content}
          onChange={InputEvent}
          placeholder="Take a Note...">
          </textarea>
          <Button onClick={AddClick}>
            <AddIcon className="plus_sign" />
          </Button>
        </p>
      </form>
    </div>
  );
};

export default CreateArea;
