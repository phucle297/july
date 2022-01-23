import "./App.css";
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import HomePage from "./pages/HomePage";
import YogaPage from "./pages/YogaPage";
import HomeTemplate from "./templates/HomeTemplate";

export const history = createBrowserHistory();
function App() {
  return (
    //? Use the HistoryRouter and library history to navigate from outside components
    <HistoryRouter history={history}>
      <Loading></Loading>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/yoga" element={<YogaPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
