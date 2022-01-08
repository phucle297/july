import "./App.css";
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HomeTemplate from "./templates/HomeTemplate";
export const history = createBrowserHistory();
function App() {
  return (
    //? Use the HistoryRouter and library history to navigate from outside components
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
