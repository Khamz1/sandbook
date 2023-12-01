import React, { useState } from "react";
import { useArticles } from "../jsArticles/JSarticle.store";

function AddJsArticles() {
  const addArticles = useArticles((state) => state.addArticles);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

const handleChangeTitle=(e)=>{
    setTitle(e.target.value)
}
const handleChangeText=(e)=>{
    setText(e.target.value)
}



const handleSubmit=(e)=>{
    e.preventDefault()
    addArticles(title, text)
    setText('')
    setTitle('')
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Введите загловок" 
        type="text" 
        value={title}
        onChange={handleChangeTitle} />
        <input placeholder="Введите текст"
         type="text"
          value={text}
          onChange={handleChangeText}  />
        <button>Отправить</button>
      </form>
    </>
  );
}

export default AddJsArticles;
