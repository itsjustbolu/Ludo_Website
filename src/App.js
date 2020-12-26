import "./App.css";
import Home from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import AboutPage from "./pages/AboutPage";
import ListingsPage from "./pages/ListingsPage";
import ApplyPage from "./pages/ApplyPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import WestmountAve from "./pages/listings/WestmountAve";

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/listings" component={ListingsPage} exact />
        <Route
          path="/listings/714-westmount-ave-dallas-tx"
          component={WestmountAve}
          exact
        />
        <Route path="/apply" component={ApplyPage} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/login" component={LoginPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
