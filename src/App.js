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
// ? Use AOS library to animate when scrolling because it is easy to use and config
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

AOS.init({
  duration: 1200,
});

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
          <Route path="/apartment" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
