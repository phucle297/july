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
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

AOS.init({
  duration: 1200,
  once: true,
});

export const history = createBrowserHistory();

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    //? Use the HistoryRouter and library history to navigate from outside components
    <HistoryRouter history={history}>
      <Loading></Loading>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/yoga" element={<YogaPage />} />
            <Route path="/apartment" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Wrapper>
    </HistoryRouter>
  );
}

export default App;
