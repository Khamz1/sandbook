import { create } from "zustand";
const useJsStore = create((set)=>({
    articles:0,
    incArticles:()=>set((state)=>({articles:state.articles+1})),
    removeAllArticles:()=>set({articles:0})
}))

export default useJsStore