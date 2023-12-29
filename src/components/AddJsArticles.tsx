import React, { useState } from "react";
import { useArticles } from "../state/JSarticle.store";
//  title, text, author, category
function AddJsArticles() {
  const addArticles = useArticles((state) => state.addArticles);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState(1);
  const [category, setCategory] = useState(1);

  const handleChangeCategory=(e)=>{
    setCategory(e.target.value)
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeFile = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addArticles(title);
    setText("");
    setTitle("");
    setImage("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <select value={category}  onChange={handleChangeCategory} name="Khamz">
          <option value={1}>JS</option>
          <option value={2}>VUE</option>
          <option value={3}>REACT</option>
        </select>
        <input onChange={handleChangeFile} type="file" /> */}
        <input
          placeholder="Введите загловок"
          type="text"
          value={title}
          onChange={handleChangeTitle}
        />
        {/* <input
          placeholder="Введите текст"
          type="text"
          value={text}
          onChange={handleChangeText}
        /> */}
        <button>Отправить</button>
      </form>
    </>
  );
}

export default AddJsArticles;
