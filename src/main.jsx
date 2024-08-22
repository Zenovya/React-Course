import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainApp from "./11-useContext/MainApp";
// import CallbackHook from "./08-useCallback/CallbackHook";
// import { Padre } from "./09-tarea-memo/Padre";
// import Memorize from "./06-Memo/Memorize";
// import MemoHook from "./07-useMemo/MemoHook";
// import App from './App.jsx'
// import CounterApp from './01-useState/CounterApp'
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
// import SimpleForm from './02-useEffect/SimpleForm'
// import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
// import HooksApp from './HooksApp'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
// import FocusScreen from './04-useRef/FocusScreen'
////////////////////////////////////////////////////////////////////////////////

// import "./10-useReducer/intro-reducer";
// import TodoApp from "./10-useReducer/TodoApp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </StrictMode>
);
