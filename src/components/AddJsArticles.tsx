import React, { useState } from "react";
import { useArticles } from "../state/JSarticle.store";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  Input,
} from "@mui/material";

//  title, text, author, category
function AddJsArticles() {
  const addArticles = useArticles((state) => state.addArticles);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState([]);
  const [author, setAuthor] = useState(1);
  const [category, setCategory] = useState('');

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category, "category")
    addArticles(title, text, author, category, image);
    setText("");
    setTitle("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item md={5}>
            <Select
              value={category}
              onChange={handleChangeCategory}
              name="Category"
            >
              <MenuItem value={"JS"}>JS</MenuItem>
              <MenuItem value={"VUE"}>VUE</MenuItem>
              <MenuItem value={"REACT"}>REACT</MenuItem>
            </Select>
          </Grid>

          <Grid item md={8}>
            <TextField
              style={{ width: "70%" }}
              id="outlined-basic"
              label="Заголовок"
              variant="outlined"
              value={title}
              onChange={handleChangeTitle}
            />
          </Grid>

          <Grid item md={8}>
            <TextField
              style={{ width: "70%" }}
              id="outlined-basic"
              label="Описание"
              variant="outlined"
              value={text}
              onChange={handleChangeText}
            />
          </Grid>

          <Grid item md={8}>
            <Input
              type="file"
              onChange={handleChangeFile}
              inputProps={{ accept: "image/*" }} // Указывает, что можно загружать только изображения
            />
            <Button type="submit" sx={{ ml: 53 }} variant="outlined">
              Отправить
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default AddJsArticles;
