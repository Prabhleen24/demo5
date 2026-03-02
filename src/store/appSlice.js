import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: "home",
  theme: "light",
  cart: [],
  skills: ["React", "Redux", "JavaScript", "TypeScript", "Node.js", "Python", "SQL"],
  projects: [
    { id: 1, title: "Smart Agriculture System", desc: "IoT + Sensors" },
    { id: 2, title: "Face Recognition Attendance", desc: "OpenCV + Python" },
    { id: 3, title: "College Chatbot", desc: "NLP + Flask" },
    { id: 4, title: "AI in Web Development", desc: "IEEE Paper" },
  ],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    addToCart: (state, action) => {
      const exists = state.cart.find((i) => i.id === action.payload.id);
      if (!exists) state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setActivePage, toggleTheme, addToCart, removeFromCart, clearCart } =
  appSlice.actions;
export default appSlice.reducer;