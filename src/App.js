import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import AlertComponent from "./components/Banner/Alert";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <AlertComponent />
        <Route path="/" component={Homepage} exact />

        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
      <AlertComponent />
    </BrowserRouter>
  );
}

export default App;
