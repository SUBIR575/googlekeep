import React,{useState} from 'react'
import './style.css'
import Header from './Component/Header'
import CreateArea from "./Component/CreateArea";
import Note from './Component/Note';
import Footer from './Component/Footer'
const App = () => {
   const [Item, setItem] = useState([])
   const AddItem=(note)=>{
        setItem((PrevData)=>{
          return [...PrevData,note]
        });
   };
   const onDelete=(id)=>{
        setItem((oldData)=>
        oldData.filter((currData,indx)=>
        {return indx !== id;}
        ));
   };
  return ( 
    <div>
      <Header/>
      <CreateArea passNote={AddItem}/>
      {Item.map((val,index)=>{
        return <Note
        id={index}
        key={index}
        title={val.title}
        content={val.content}
        DeleteItem={onDelete}
        />
      })}
      <Footer/>
    </div>
  )
}

export default App
