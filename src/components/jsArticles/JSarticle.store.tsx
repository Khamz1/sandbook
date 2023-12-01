import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useArticles = create(
  devtools(
    persist(
      (set, get) => ({
        articles: [
          { id: 1, title: "First Step in Zustand", text: "Lorem" },
          { id: 2, title: "Second Step in Zustand", text: "Ipsum" },
          { id: 3, title: "Third Step in Zustand", text: "Dolores" },
        ],
        loading: false,
        error: null,
        addArticles: (title, text) => {
          const newArt = { id: Math.floor(Math.random()), title, text };
          set({ articles: [...get().articles, newArt] });
        },
        fetchArticles: async () => {
          set({ loading: true });

          try {
            const res = await fetch(
              "https://jsonplaceholder.typicode.com/posts"
            );
            if (!res.ok) throw new Error("failed to fetch");
            set({ articles: await res.json(), error: null });
          } catch (error) {
            set({ error: error.message });
          } finally {
            set({ loading: false });
          }
        },
      }),
      {
        name: "articles-storage", // имя хранилища
        getStorage: () => localStorage, // функция, возвращающая объект хранилища
      }
    )
  )
);
