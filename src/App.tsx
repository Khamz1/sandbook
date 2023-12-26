import JSarticle from "./components/jsArticles/JSarticle";
import AddJsArticles from "./components/addArticles/AddJsArticles";
import Header from "./components/header/Header";
import "./App.scss";
import { useContext, useEffect } from "react";
import { Context } from "./main";
import {observer} from 'mobx-react-lite'

function App() {
  const { store } = useContext(Context);

  useEffect(()=> {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  return (
    <>
      <Header />
      {store.isAuth ? <h3>Вы авторизованы</h3> : <h3>Авторизуйтесь</h3>}
      <JSarticle />
      <AddJsArticles />
    </>
  );
}

export default observer(App);
