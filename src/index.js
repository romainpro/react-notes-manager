import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "App";
import { StrictMode } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PageNotFound from "assets/images/page/PageNotFound/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
     
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
     </BrowserRouter>
    </Provider>
  </StrictMode>
);
