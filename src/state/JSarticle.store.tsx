import create from "zustand";
import {devtools} from "zustand/middleware";

export const useArticles = create(
  devtools((set, get) => ({
    articles: [],
    loading: false,
    error: null,
    addArticles: async (title, text, author, category, image) => {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('text', text);
      formData.append('author', author); // Вот тут добавлен author
      formData.append('category', category);
      formData.append('image', image);
      try {
        const res = await fetch('https://back.sandbook.ru:3000/article', {
          method: 'POST',
          body: formData,
        });
        const arts = await res.json();
        console.log(arts, 'SSSS');
      } catch (error) {
        console.error('Error:', error);
      }
    },
    

    fetchArticles: async () => {
      set({ loading: true });

      try {
        const res = await fetch("https://back.sandbook.ru:3000/article/");
        if (!res.ok) throw new Error("failed to fetch");
        const articles = await res.json()
        set({ articles:articles, error: null });
      } catch (error) {
        set({ error: error.message });
      } finally {
        set({ loading: false });
      }
    },
  }))
);
